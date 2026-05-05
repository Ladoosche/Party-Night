import React, { useEffect, useRef } from 'react';
import { useAppContext } from '../../context/AppContext';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // On récupère le thème choisi par l'utilisateur dans les paramètres
  const { theme } = useAppContext();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Est-ce que le mode nuit est actif en ce moment ?
    // Le thème peut être 'light', 'dark', ou 'system' (= préférence du système).
    // Pour 'system', on demande directement au navigateur.
    const getIsDark = () =>
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    const draw = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const w = canvas.width;
      const h = canvas.height;

      const isDark = getIsDark();

      // Fond du ciel
      // Jour : cyan clair comme un ciel de plage ensoleillé
      // Nuit : bleu nuit profond, presque noir avec une teinte bleue
      ctx.fillStyle = isDark ? '#0a0f1e' : '#e0f4f8';
      ctx.fillRect(0, 0, w, h);

      // Cercles lumineux : reflets du soleil (jour) ou de la lune (nuit)
      // Chaque cercle a une position (x, y), un rayon (r), une opacité (a) et une couleur (c)
      const circles = isDark
        ? [
            { x: 0.85, y: 0.15, r: 0.15, a: 0.07, c: '200,220,255' }, // Reflet principal de la lune
            { x: 0.15, y: 0.25, r: 0.35, a: 0.04, c: '180,200,255' }, // Lueur ambiante diffuse
            { x: 0.60, y: 0.05, r: 0.25, a: 0.06, c: '220,235,255' }, // Position de la lune
          ]
        : [
            { x: 0.85, y: 0.15, r: 0.15, a: 0.10, c: '238,108,77' }, // Reflet soleil
            { x: 0.15, y: 0.25, r: 0.35, a: 0.05, c: '238,108,77' },
            { x: 0.60, y: 0.05, r: 0.25, a: 0.04, c: '238,108,77' },
          ];

      circles.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x * w, c.y * h, c.r * Math.min(w, h), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.c},${c.a})`;
        ctx.fill();
      });

      // Vague 1 — bande supérieure de l'océan
      // Jour : sarcelle translucide (tropical)
      // Nuit : bleu profond plus opaque (suggère les profondeurs)
      ctx.fillStyle = isDark ? 'rgba(0, 40, 80, 0.60)' : 'rgba(10, 147, 150, 0.15)';
      ctx.beginPath();
      for (let x = 0; x <= w; x += 10) {
        ctx.lineTo(x, h * 0.65 + Math.sin(x * 0.005) * 30);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.fill();

      // Vague 2 — bande inférieure (plus profonde)
      // Jour : bleu moyen
      // Nuit : quasi-noir marine
      ctx.fillStyle = isDark ? 'rgba(0, 20, 60, 0.50)' : 'rgba(0, 119, 182, 0.10)';
      ctx.beginPath();
      for (let x = 0; x <= w; x += 10) {
        ctx.lineTo(x, h * 0.75 + Math.sin(x * 0.008 + 2) * 20);
      }
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.fill();

      // Traits fins sur les crêtes des vagues
      // Jour : bleu doux (lumière du jour sur les vaguelettes)
      // Nuit : bleu glacé pâle (reflet de lune / bioluminescence)
      ctx.lineWidth = 1;
      for (let i = 0; i < 4; i++) {
        const baseY = h * (0.6 + i * 0.08);
        const opacity = isDark ? 0.08 - i * 0.02 : 0.10 - i * 0.02;
        const color = isDark ? `rgba(100,180,255,${opacity})` : `rgba(0,119,182,${opacity})`;
        ctx.strokeStyle = color;
        ctx.beginPath();
        for (let x = 0; x < w; x += 10) {
          const y = baseY + Math.sin(x * 0.01 + i) * 15 + Math.sin(x * 0.03 + i) * 5;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
    };

    draw();

    // Redessine si la fenêtre est redimensionnée
    // requestAnimationFrame évite de redessiner 60 fois pendant le redimensionnement
    let resizeTimer: number;
    const handleResize = () => {
      window.cancelAnimationFrame(resizeTimer);
      resizeTimer = window.requestAnimationFrame(draw);
    };
    window.addEventListener('resize', handleResize);

    // Si le thème est "automatique", on écoute aussi les changements de préférence OS
    // (l'utilisateur peut passer son Mac en mode nuit sans toucher aux paramètres de l'app)
    let mediaQuery: MediaQueryList | null = null;
    let handleMediaChange: (() => void) | null = null;
    if (theme === 'system') {
      mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      handleMediaChange = () => draw();
      mediaQuery.addEventListener('change', handleMediaChange);
    }

    // Nettoyage : on supprime les listeners quand le composant se démonte
    // ou quand le thème change (React relance l'effet depuis le début)
    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(resizeTimer);
      if (mediaQuery && handleMediaChange) {
        mediaQuery.removeEventListener('change', handleMediaChange);
      }
    };

  }, [theme]); // Se redéclenche automatiquement à chaque changement de thème

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};
