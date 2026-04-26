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

      ctx.fillStyle = '#e8e4d8';
      ctx.fillRect(0, 0, w, h);

      const circles = [
        { x: 0.80, y: 0.05, r: 0.30, a: 0.05, c: '99,102,241' },
        { x: 0.10, y: 0.15, r: 0.22, a: 0.04, c: '59,130,246' },
        { x: 0.60, y: 0.70, r: 0.28, a: 0.03, c: '99,102,241' },
        { x: 0.05, y: 0.75, r: 0.18, a: 0.04, c: '59,130,246' },
        { x: 0.90, y: 0.55, r: 0.20, a: 0.03, c: '148,163,184' },
        { x: 0.40, y: 0.90, r: 0.22, a: 0.04, c: '99,102,241' },
      ];

      circles.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x * w, c.y * h, c.r * Math.min(w, h), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.c},${c.a})`;
        ctx.fill();
      });

      ctx.lineWidth = 0.5;
      for (let i = 0; i < 8; i++) {
        const baseY = h * (0.55 + i * 0.06);
        ctx.strokeStyle = `rgba(148,163,184,${0.04 - i * 0.005})`;
        ctx.beginPath();
        for (let x = 0; x < w; x += 4) {
          const y = baseY + Math.sin(x * 0.018 + i) * 14 + Math.sin(x * 0.05 + i) * 6;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      ctx.fillStyle = 'rgba(180,160,120,0.08)';
      for (let i = 0; i < 120; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * w, Math.random() * h, 1 + Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    draw();
    window.addEventListener('resize', draw);
    return () => window.removeEventListener('resize', draw);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};
