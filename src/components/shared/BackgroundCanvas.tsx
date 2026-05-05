import React, { useEffect, useRef } from 'react';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const w = canvas.width;
      const h = canvas.height;

      ctx.fillStyle = '#e0f4f8';
      ctx.fillRect(0, 0, w, h);

      const circles = [
        { x: 0.85, y: 0.15, r: 0.15, a: 0.1, c: '238,108,77' }, // Sun reflection
        { x: 0.15, y: 0.25, r: 0.35, a: 0.05, c: '238,108,77' },
        { x: 0.60, y: 0.05, r: 0.25, a: 0.04, c: '238,108,77' },
      ];

      circles.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x * w, c.y * h, c.r * Math.min(w, h), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.c},${c.a})`;
        ctx.fill();
      });

      // Sea waves at the bottom half
      ctx.fillStyle = 'rgba(10, 147, 150, 0.15)';
      ctx.beginPath();
      for(let x = 0; x <= w; x += 10) {
        ctx.lineTo(x, h * 0.65 + Math.sin(x * 0.005) * 30);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.fill();

      ctx.fillStyle = 'rgba(0, 119, 182, 0.1)';
      ctx.beginPath();
      for(let x = 0; x <= w; x += 10) {
        ctx.lineTo(x, h * 0.75 + Math.sin(x * 0.008 + 2) * 20);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.fill();

      ctx.lineWidth = 1;
      for (let i = 0; i < 4; i++) {
        const baseY = h * (0.6 + i * 0.08);
        ctx.strokeStyle = `rgba(0,119,182,${0.1 - i * 0.02})`;
        ctx.beginPath();
        for (let x = 0; x < w; x += 10) {
          const y = baseY + Math.sin(x * 0.01 + i) * 15 + Math.sin(x * 0.03 + i) * 5;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    draw();
    
    let resizeTimer: number;
    const handleResize = () => {
      window.cancelAnimationFrame(resizeTimer);
      resizeTimer = window.requestAnimationFrame(draw);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(resizeTimer);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};
