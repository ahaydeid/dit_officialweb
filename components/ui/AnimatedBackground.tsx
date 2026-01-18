"use client";

import { useEffect, useRef } from "react";



const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let offsetX = 0;
    let offsetY = 0;

    const gridSize = 40; // Size of the grid squares
    const speed = 0.5; // Speed of movement

    const drawGrid = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Update color based on computed style to verify theme usually, 
      // but here we use a very subtle slate color for the grid lines
      ctx.strokeStyle = "rgba(148, 163, 184, 0.15)"; // Slate-400 with very low opacity
      ctx.lineWidth = 1;

      // Update offsets
      offsetX = (offsetX + speed) % gridSize;
      offsetY = (offsetY + speed) % gridSize;

      ctx.beginPath();

      // Draw vertical lines
      for (let x = offsetX; x <= w; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
      }

      // Draw horizontal lines
      for (let y = offsetY; y <= h; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }

      ctx.stroke();

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    // Init
    drawGrid();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default AnimatedBackground;
