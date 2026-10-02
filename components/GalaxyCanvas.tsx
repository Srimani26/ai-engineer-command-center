"use client";

import React, { useEffect, useRef } from "react";

export default function GalaxyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Star particles
    const starCount = Math.min(Math.floor((width * height) / 8000), 180);
    const stars: {
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      alpha: number;
      twinkleSpeed: number;
    }[] = [];

    const colors = ["#00F0FF", "#8B5CF6", "#EC4899", "#10B981", "#FFFFFF", "#F59E0B"];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.5,
        size: Math.random() * 2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.008,
      });
    }

    // Shooting comets
    const comets: {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      alpha: number;
      active: boolean;
    }[] = [];

    const spawnComet = () => {
      comets.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.4),
        length: Math.random() * 80 + 40,
        speed: Math.random() * 6 + 4,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2,
        alpha: 1,
        active: true,
      });
    };

    let cometTimer = 0;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing space nebula ambient clouds
      const grad1 = ctx.createRadialGradient(
        width * 0.25 + (mouseX - width / 2) * 0.05,
        height * 0.25 + (mouseY - height / 2) * 0.05,
        50,
        width * 0.25,
        height * 0.25,
        width * 0.45
      );
      grad1.addColorStop(0, "rgba(124, 58, 237, 0.18)");
      grad1.addColorStop(0.5, "rgba(236, 72, 153, 0.08)");
      grad1.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.75 - (mouseX - width / 2) * 0.04,
        height * 0.4 - (mouseY - height / 2) * 0.04,
        60,
        width * 0.75,
        height * 0.4,
        width * 0.5
      );
      grad2.addColorStop(0, "rgba(0, 240, 255, 0.16)");
      grad2.addColorStop(0.6, "rgba(16, 185, 129, 0.06)");
      grad2.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Render stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        // Twinkle
        s.alpha += s.twinkleSpeed;
        if (s.alpha > 1 || s.alpha < 0.2) {
          s.twinkleSpeed = -s.twinkleSpeed;
        }

        // Slight drift
        s.y -= s.z * 0.15;
        if (s.y < 0) s.y = height;

        // Mouse gravity push
        const dx = mouseX - s.x;
        const dy = mouseY - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          s.x -= dx * 0.015;
          s.y -= dy * 0.015;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, s.alpha));
        ctx.shadowBlur = 8;
        ctx.shadowColor = s.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      // 3. Comets / Shooting stars
      cometTimer++;
      if (cometTimer > 180 && Math.random() < 0.03) {
        spawnComet();
        cometTimer = 0;
      }

      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        c.x += Math.cos(c.angle) * c.speed;
        c.y += Math.sin(c.angle) * c.speed;
        c.alpha -= 0.012;

        if (c.alpha <= 0 || c.x > width || c.y > height) {
          comets.splice(i, 1);
          continue;
        }

        const tailX = c.x - Math.cos(c.angle) * c.length;
        const tailY = c.y - Math.sin(c.angle) * c.length;

        const cometGrad = ctx.createLinearGradient(c.x, c.y, tailX, tailY);
        cometGrad.addColorStop(0, `rgba(0, 240, 255, ${c.alpha})`);
        cometGrad.addColorStop(0.5, `rgba(139, 92, 246, ${c.alpha * 0.5})`);
        cometGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = cometGrad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
