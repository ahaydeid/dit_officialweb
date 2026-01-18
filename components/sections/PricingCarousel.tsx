"use client";

import useEmblaCarousel from "embla-carousel-react";
import { CheckCircle2, User, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";


interface PricingFeature {
  name: string;
}

interface PricingItem {
  title: string;
  price: string;
  quota: string;
  desc: string;
  isPopular?: boolean;
  features: string[];
}

interface PricingCarouselProps {
  items: PricingItem[];
}

export default function PricingCarousel({ items }: PricingCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "center", 
    loop: true,
    containScroll: false, // containScroll 'trimSnaps' conflicts with loop sometimes, false is default for loop
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // TWEEN SCALE LOGIC
  const tweenScale = useCallback((emblaApi: EmblaCarouselType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    // const isScrollEvent = event === "scroll"; // Removed risky global event check
    const isScrollEvent = true;

    emblaApi.scrollSnapList().forEach((scrollSnap: number, snapIndex: number) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex: number) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        // Circular loop logic omitted since loop: false
        
        // Calculate distance from center/snap point
        // But simplified: Use offset from the *current selected snap*? 
        // No, standard tween uses scroll progress.
        // Let's use a simpler visual approach:
        // Get slide nodes.
        // Calculate visual center of each slide.
        // Calculate center of Viewport.
        // Distance -> Scale.
      });
    });
  }, []);

  // Simpler approach for "Center Big":
  // Loop through slide nodes, compare their center position with viewport center.
  const updateScales = useCallback((emblaApi: EmblaCarouselType) => {
    const nodes = emblaApi.slideNodes();
    const viewportNode = emblaApi.rootNode();
    const viewportCenter = viewportNode.getBoundingClientRect().width / 2;

    nodes.forEach((node: HTMLElement) => {
      const nodeRect = node.getBoundingClientRect();
      const nodeCenter = nodeRect.left + nodeRect.width / 2;
      // Offset relative to viewport container
      // But nodeRect is relative to Window. viewport rect also relative to Window.
      // We need relative to viewport.
      const nodeRelativeCenter = nodeCenter - viewportNode.getBoundingClientRect().left;
      
      const dist = Math.abs(viewportCenter - nodeRelativeCenter);
      const scale = 1 - Math.min(dist / viewportCenter, 1) * 0.2; // Max scale 1, min 0.8
      
      // We want distinct center pop.
      // If close to center, scale 1.1?
      // CSS Transform scale.
      
      // Let's rely on class manipulation or distinct scale var.
      // Or just precise style.
      // For "Standard" look: Side items 0.9, Center 1.05.
      
      // Custom ease
      const factor = 1 - Math.min(dist / (viewportCenter * 0.8), 1); 
      // factor is 1 at center, 0 at edges.
      
      const targetScale = 0.9 + (factor * 0.15); // Min 0.9, Max 1.05
      const targetOpacity = 0.8 + (factor * 0.2); // Min 0.8, Max 1.0

      const child = node.querySelector('.pricing-card-inner') as HTMLElement;
      if (child) {
         child.style.transform = `scale(${targetScale})`;
         child.style.opacity = `${targetOpacity}`;
         // child.style.zIndex = factor > 0.8 ? '10' : '0'; // Bring center to front
      }
    });
  }, []);


  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    updateScales(emblaApi);
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, updateScales]);

  useEffect(() => {
    if (!emblaApi) return;
    
    onScroll(); // Init
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
    
    setScrollSnaps(emblaApi.scrollSnapList());
    
    return () => {
        emblaApi.off("scroll", onScroll);
        emblaApi.off("reInit", onScroll);
    }
  }, [emblaApi, onScroll]);
  
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Viewport */}
      <div className="overflow-hidden py-12" ref={emblaRef}> {/* Extra VY padding for scale */}
        <div className="flex -ml-4 sm:-ml-6 touch-pan-y">
          {items.map((item: PricingItem, index: number) => (
            <div
              key={index}
              className="flex-[0_0_85%] min-w-0 pl-4 sm:pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] flex justify-center" // Centered flex content
            >
              <PricingCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons (Desktop) */}
      <button
        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 z-20 p-3 rounded-full bg-white dark:bg-slate-800 shadow-md border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform hidden lg:flex items-center justify-center disabled:opacity-50"
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!emblaApi?.canScrollPrev()}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 z-20 p-3 rounded-full bg-white dark:bg-slate-800 shadow-md border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform hidden lg:flex items-center justify-center disabled:opacity-50"
        onClick={() => emblaApi?.scrollNext()}
        disabled={!emblaApi?.canScrollNext()}
      >
        <ChevronRight size={24} />
      </button>


      {/* Dots Pagination (Mobile/All) */}
      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-sky-600 w-8"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  quota,
  desc,
  features = [],
  isPopular = false,
}: PricingItem) {
  return (
    // Only styling wrapper here. Scaling is applied to this node by parent logic
    <div
      className={`pricing-card-inner h-full w-full p-8 rounded-xl border flex flex-col relative transition-all duration-300 ease-out will-change-transform ${
        isPopular
          ? "bg-white dark:bg-slate-800 border-red-200 dark:border-red-900 shadow-lg shadow-gray-500/10 ring-1 ring-red-100 dark:ring-red-900/30"
          : "bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700 hover:border-sky-100 dark:hover:border-sky-900 hover:shadow-lg"
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
          Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <div className="flex items-baseline gap-1 my-4">
        <span
          className={`text-3xl sm:text-4xl font-extrabold ${
            isPopular ? "text-red-600" : "text-sky-600"
          }`}
        >
          {price}
        </span>
        <span className="text-gray-500 text-sm">/bulan</span>
      </div>
      <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 mb-6">
        <User
          size={16}
          className={isPopular ? "text-red-500" : "text-sky-500"}
        />
        <span>Kuota: {quota}</span>
      </div>
      <p className="text-gray-500 text-sm mb-6 flex-grow min-h-[40px]">{desc}</p>

      {/* Features List */}
      <div className="mb-8 border-t border-gray-100 dark:border-gray-700 pt-6">
        <ul className="space-y-3">
          {features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-start gap-3 text-sm">
              <CheckCircle2
                size={16}
                className={`flex-shrink-0 mt-0.5 ${
                  isPopular ? "text-red-500" : "text-sky-500"
                }`}
              />
              <span className="text-gray-600 dark:text-gray-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`w-full py-3 rounded-full font-bold transition-all mt-auto ${
          isPopular
            ? "bg-red-500 cursor-pointer hover:bg-red-600 text-white hover:shadow-lg"
            : "bg-sky-500 cursor-pointer hover:bg-sky-600 text-white hover:shadow-lg"
        }`}
      >
        Pilih Paket
      </button>
    </div>
  );
}
