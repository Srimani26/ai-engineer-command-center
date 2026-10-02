"use client";

import React, { useEffect, useRef } from "react";

export default function GalaxyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    let mouse = { x: width / 2, y: height / 2, active: false };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const handleMouseLeave = () => {
      mouse.active = false;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Click Shockwave
    interface Shockwave {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      color: string;
    }
    const shockwaves: Shockwave[] = [];
    const shockwaveColors = ["#00f5ff", "#a855f7", "#ec4899", "#10b981"];

    const handleClick = (e: MouseEvent) => {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: Math.max(width, height) * 0.45,
        alpha: 0.9,
        color: shockwaveColors[Math.floor(Math.random() * shockwaveColors.length)],
      });
    };
    window.addEventListener("click", handleClick);

    // 1. Spiral Galaxy Particles (Center Nebula Core)
    interface GalaxyParticle {
      angle: number;
      dist: number;
      speed: number;
      size: number;
      color: string;
      alpha: number;
      arm: number;
    }
    const galaxyParticles: GalaxyParticle[] = [];
    const galaxyArms = 4;
    const galaxyColorPalette = [
      "#00f5ff", // Electric Cyan
      "#38bdf8", // Sky Blue
      "#a855f7", // Purple
      "#c084fc", // Lavender
      "#ec4899", // Neon Fuchsia
      "#f43f5e", // Rose
      "#fbbf24", // Golden Star
      "#ffffff", // White Light
    ];

    const GALAXY_COUNT = 240;
    for (let i = 0; i < GALAXY_COUNT; i++) {
      const arm = i % galaxyArms;
      const dist = Math.pow(Math.random(), 1.8) * Math.min(width, height) * 0.55 + 20;
      const armAngle = (arm * 2 * Math.PI) / galaxyArms;
      const spiralOffset = dist * 0.0035;
      const angle = armAngle + spiralOffset + (Math.random() - 0.5) * 0.6;
      galaxyParticles.push({
        angle,
        dist,
        speed: (0.0004 + (1 / (dist + 50)) * 0.15) * (Math.random() * 0.4 + 0.8),
        size: Math.random() * 1.8 + 0.6,
        color: galaxyColorPalette[Math.floor(Math.random() * galaxyColorPalette.length)],
        alpha: Math.random() * 0.7 + 0.3,
        arm,
      });
    }

    // 2. Cosmic Ambient Stars (Deep Space Field)
    interface Star {
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      twinkleSpeed: number;
      twinklePhase: number;
      baseAlpha: number;
    }
    const stars: Star[] = [];
    const STAR_COUNT = 180;
    const starColors = ["#ffffff", "#93c5fd", "#c4b5fd", "#fbcfe8", "#fde68a"];

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 1000,
        size: Math.random() * 1.6 + 0.4,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        baseAlpha: Math.random() * 0.6 + 0.2,
      });
    }

    // 3. Shooting Comets
    interface Comet {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      alpha: number;
      color: string;
      active: boolean;
    }
    const comets: Comet[] = [];
    const spawnComet = () => {
      const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.3; // ~45 deg
      comets.push({
        x: Math.random() * width * 0.8,
        y: -50,
        length: Math.random() * 120 + 80,
        speed: Math.random() * 8 + 12,
        angle,
        alpha: 1,
        color: Math.random() > 0.5 ? "#00f5ff" : "#ec4899",
        active: true,
      });
    };

    let cometTimer = 0;

    // 4. Render Loop
    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.fillStyle = "rgba(3, 3, 12, 0.45)";
      ctx.fillRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.42;

      // Draw Cosmic Ambient Nebulae (Vibrant Soft Gradients)
      const drawNebula = (cx: number, cy: number, r: number, color: string, alpha: number) => {
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, color);
        grad.addColorStop(1, "transparent");
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      };

      const pulse1 = Math.sin(time * 0.8) * 40;
      const pulse2 = Math.cos(time * 0.6) * 50;
      drawNebula(centerX - 150 + pulse1, centerY - 60, 420, "#7928ca", 0.16); // Violet core
      drawNebula(centerX + 180, centerY + 80 + pulse2, 380, "#00f5ff", 0.14); // Cyan haze
      drawNebula(centerX - 80, centerY + 180, 340, "#ec4899", 0.12); // Fuchsia glow
      drawNebula(centerX + 60, centerY - 160, 300, "#10b981", 0.08); // Emerald aurora

      // Render Ambient Stars with Gravitational Parallax
      stars.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.25;

        // Subtle mouse sway
        let px = star.x;
        let py = star.y;
        if (mouse.active) {
          const dx = mouse.x - star.x;
          const dy = mouse.y - star.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 300 && dist > 1) {
            const pull = (1 - dist / 300) * 12;
            px -= (dx / dist) * pull;
            py -= (dy / dist) * pull;
          }
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Render Rotating Spiral Galaxy
      galaxyParticles.forEach((p) => {
        p.angle += p.speed;

        let curX = centerX + Math.cos(p.angle) * p.dist;
        let curY = centerY + Math.sin(p.angle) * p.dist * 0.65; // Elliptical 3D tilt

        // Gravitational attraction towards cursor
        if (mouse.active) {
          const dx = mouse.x - curX;
          const dy = mouse.y - curY;
          const dist = Math.hypot(dx, dy);
          if (dist < 260 && dist > 5) {
            const force = (1 - dist / 260) * 22;
            curX += (dx / dist) * force;
            curY += (dy / dist) * force;
          }
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size * 5;
        ctx.beginPath();
        ctx.arc(curX, curY, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Spawn and Render Comets
      cometTimer++;
      if (cometTimer > 280) {
        spawnComet();
        cometTimer = Math.floor(Math.random() * 80);
      }

      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        if (!c.active) continue;

        c.x += Math.cos(c.angle) * c.speed;
        c.y += Math.sin(c.angle) * c.speed;
        c.alpha -= 0.008;

        if (c.x > width + 100 || c.y > height + 100 || c.alpha <= 0) {
          comets.splice(i, 1);
          continue;
        }

        const tailX = c.x - Math.cos(c.angle) * c.length;
        const tailY = c.y - Math.sin(c.angle) * c.length;

        const cometGrad = ctx.createLinearGradient(c.x, c.y, tailX, tailY);
        cometGrad.addColorStop(0, c.color);
        cometGrad.addColorStop(1, "transparent");

        ctx.save();
        ctx.globalAlpha = Math.max(0, c.alpha);
        ctx.strokeStyle = cometGrad;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Glowing Comet Head
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = c.color;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(c.x, c.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Render Shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += 8;
        sw.alpha *= 0.94;

        if (sw.radius >= sw.maxRadius || sw.alpha < 0.02) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = sw.alpha;
        ctx.strokeStyle = sw.color;
        ctx.lineWidth = 2;
        ctx.shadowColor = sw.color;
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-90 transition-opacity duration-1000"
      style={{ background: "#03030c" }}
    />
  );
}
