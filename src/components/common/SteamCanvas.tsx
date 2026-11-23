"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  maxAlpha: number;
  life: number;
  maxLife: number;
}

export default function SteamCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particles: Particle[] = [];
    const maxParticles = 45;

    const createParticle = (): Particle => {
      // Spawn near the bottom center / hero focal area
      const spreadX = width * 0.5 + (Math.random() - 0.5) * (width * 0.6);
      return {
        x: spreadX,
        y: height * 0.85 + Math.random() * (height * 0.15),
        vx: (Math.random() - 0.5) * 0.6,
        vy: -0.4 - Math.random() * 0.7,
        size: 30 + Math.random() * 60,
        alpha: 0,
        maxAlpha: 0.04 + Math.random() * 0.05,
        life: 0,
        maxLife: 220 + Math.random() * 180,
      };
    };

    // Pre-populate particles
    for (let i = 0; i < maxParticles; i++) {
      const p = createParticle();
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life++;

        // Fade in then fade out smoothly
        const progress = p.life / p.maxLife;
        if (progress < 0.3) {
          p.alpha = (progress / 0.3) * p.maxAlpha;
        } else {
          p.alpha = (1 - (progress - 0.3) / 0.7) * p.maxAlpha;
        }

        p.x += p.vx + Math.sin(p.life * 0.015) * 0.3;
        p.y += p.vy;
        p.size += 0.15;

        // Draw soft radial gradient steam puff
        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.size
        );
        gradient.addColorStop(0, `rgba(255, 230, 190, ${p.alpha * 1.5})`);
        gradient.addColorStop(0.5, `rgba(255, 168, 39, ${p.alpha * 0.5})`);
        gradient.addColorStop(1, "rgba(255, 168, 39, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (p.life >= p.maxLife || p.y < -50) {
          particles[i] = createParticle();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 mix-blend-screen opacity-70"
    />
  );
}
