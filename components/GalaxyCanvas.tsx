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

    // Click Cosmic Shockwave
    interface Shockwave {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      color: string;
    }
    const shockwaves: Shockwave[] = [];
    const shockColors = ["#22d3ee", "#a855f7", "#ec4899", "#10b981", "#fbbf24"];

    const handleClick = (e: MouseEvent) => {
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 8,
        maxRadius: Math.max(width, height) * 0.4,
        alpha: 0.85,
        color: shockColors[Math.floor(Math.random() * shockColors.length)],
      });
    };
    window.addEventListener("click", handleClick);

    // ==========================================
    // 1. SOLAR SYSTEM & PLANETARY ORBITS
    // ==========================================
    interface Planet {
      name: string;
      radiusX: number; // semi-major axis
      radiusY: number; // semi-minor axis (for 3D tilt)
      speed: number;
      angle: number;
      size: number;
      color: string;
      glowColor: string;
      hasRings?: boolean;
      ringRadius?: number;
      hasMoon?: boolean;
      moonAngle?: number;
    }

    const planets: Planet[] = [
      {
        name: "Mercury",
        radiusX: 130,
        radiusY: 65,
        speed: 0.016,
        angle: 0.2,
        size: 3.2,
        color: "#fbbf24",
        glowColor: "#f59e0b",
      },
      {
        name: "Earth",
        radiusX: 230,
        radiusY: 110,
        speed: 0.01,
        angle: 1.8,
        size: 5.5,
        color: "#06b6d4",
        glowColor: "#38bdf8",
        hasMoon: true,
        moonAngle: 0,
      },
      {
        name: "Mars",
        radiusX: 340,
        radiusY: 160,
        speed: 0.007,
        angle: 3.4,
        size: 4.2,
        color: "#f43f5e",
        glowColor: "#fb7185",
      },
      {
        name: "Jupiter",
        radiusX: 470,
        radiusY: 220,
        speed: 0.0045,
        angle: 4.8,
        size: 9.5,
        color: "#fb923c",
        glowColor: "#fdba74",
        hasRings: true,
        ringRadius: 18,
      },
      {
        name: "Neptune",
        radiusX: 620,
        radiusY: 290,
        speed: 0.0028,
        angle: 5.9,
        size: 7.0,
        color: "#818cf8",
        glowColor: "#a5b4fc",
      },
    ];

    // ==========================================
    // 2. STARFIELD (Over 240 Twinkling Stars + Spikes)
    // ==========================================
    interface Star {
      x: number;
      y: number;
      size: number;
      color: string;
      twinkleSpeed: number;
      twinklePhase: number;
      baseAlpha: number;
      hasSpikes?: boolean;
    }
    const stars: Star[] = [];
    const STAR_COUNT = 240;
    const starColors = ["#ffffff", "#93c5fd", "#c4b5fd", "#fbcfe8", "#fef08a", "#a7f3d0"];

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.4,
        color: starColors[Math.floor(Math.random() * starColors.length)],
        twinkleSpeed: Math.random() * 0.035 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        baseAlpha: Math.random() * 0.6 + 0.25,
        hasSpikes: i % 18 === 0, // Rare bright stars with 4-point spikes
      });
    }

    // ==========================================
    // 3. SPIRAL GALAXY CORE DUST
    // ==========================================
    interface CoreParticle {
      angle: number;
      dist: number;
      speed: number;
      size: number;
      color: string;
      alpha: number;
    }
    const coreParticles: CoreParticle[] = [];
    const CORE_COUNT = 160;
    const coreColors = ["#00f5ff", "#a855f7", "#ec4899", "#f59e0b", "#3b82f6", "#ffffff"];

    for (let i = 0; i < CORE_COUNT; i++) {
      const dist = Math.pow(Math.random(), 1.5) * 140 + 10;
      coreParticles.push({
        angle: Math.random() * Math.PI * 2,
        dist,
        speed: (0.003 + (1 / (dist + 30)) * 0.08) * (Math.random() * 0.4 + 0.8),
        size: Math.random() * 1.8 + 0.6,
        color: coreColors[Math.floor(Math.random() * coreColors.length)],
        alpha: Math.random() * 0.7 + 0.3,
      });
    }

    // ==========================================
    // 4. DRAMATIC SHOOTING STARS / COMETS
    // ==========================================
    interface Comet {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      alpha: number;
      color: string;
      headSize: number;
      active: boolean;
    }
    const comets: Comet[] = [];

    const spawnComet = () => {
      // Meteors fly diagonally from top-right or top-left
      const fromLeft = Math.random() > 0.5;
      const angle = fromLeft
        ? Math.PI / 4 + (Math.random() - 0.5) * 0.2
        : (3 * Math.PI) / 4 + (Math.random() - 0.5) * 0.2;

      comets.push({
        x: fromLeft ? Math.random() * width * 0.7 : width * 0.3 + Math.random() * width * 0.7,
        y: -30,
        length: Math.random() * 150 + 100,
        speed: Math.random() * 9 + 13,
        angle,
        alpha: 1,
        color: Math.random() > 0.4 ? "#22d3ee" : "#f43f5e",
        headSize: Math.random() * 1.5 + 2,
        active: true,
      });
    };

    let cometTimer = 0;

    // ==========================================
    // 5. ANIMATION RENDER LOOP
    // ==========================================
    let time = 0;

    const render = () => {
      time += 0.01;

      // Deep space background clear
      ctx.fillStyle = "rgba(3, 3, 12, 0.38)";
      ctx.fillRect(0, 0, width, height);

      const sunX = width * 0.5;
      const sunY = Math.min(height * 0.44, 380);

      // A. Draw Nebular Clouds (Space Dust)
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

      const pX = Math.sin(time * 0.5) * 35;
      const pY = Math.cos(time * 0.4) * 30;
      drawNebula(sunX - 160 + pX, sunY - 40, 480, "#6366f1", 0.16); // Cosmic Indigo
      drawNebula(sunX + 200, sunY + 80 + pY, 440, "#06b6d4", 0.14); // Cyan Aura
      drawNebula(sunX - 80, sunY + 180, 380, "#d946ef", 0.11); // Nebula Pink
      drawNebula(sunX + 120, sunY - 140, 360, "#10b981", 0.07); // Aurora Green

      // B. Render Ambient Starfield with Twinkle & Diffraction Spikes
      stars.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        const curAlpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.3;

        let px = star.x;
        let py = star.y;
        if (mouse.active) {
          const dx = mouse.x - star.x;
          const dy = mouse.y - star.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 280 && dist > 2) {
            const pull = (1 - dist / 280) * 10;
            px -= (dx / dist) * pull;
            py -= (dy / dist) * pull;
          }
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0.12, Math.min(1, curAlpha));
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(px, py, star.size, 0, Math.PI * 2);
        ctx.fill();

        // 4-Point Star Spikes for Bright Stars
        if (star.hasSpikes && curAlpha > 0.6) {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(px - star.size * 3.5, py);
          ctx.lineTo(px + star.size * 3.5, py);
          ctx.moveTo(px, py - star.size * 3.5);
          ctx.lineTo(px, py + star.size * 3.5);
          ctx.stroke();
        }
        ctx.restore();
      });

      // C. Render Central Solar Core / Star
      const sunPulse = Math.sin(time * 2) * 4;
      const sunRadius = 26 + sunPulse;

      // Sun Outer Glow
      const sunGlow = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius * 4.5);
      sunGlow.addColorStop(0, "rgba(251, 191, 36, 0.45)");
      sunGlow.addColorStop(0.3, "rgba(244, 63, 94, 0.2)");
      sunGlow.addColorStop(0.7, "rgba(168, 85, 247, 0.08)");
      sunGlow.addColorStop(1, "transparent");

      ctx.save();
      ctx.fillStyle = sunGlow;
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunRadius * 4.5, 0, Math.PI * 2);
      ctx.fill();

      // Sun Core
      const sunCore = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunRadius);
      sunCore.addColorStop(0, "#ffffff");
      sunCore.addColorStop(0.4, "#fef08a");
      sunCore.addColorStop(0.8, "#f59e0b");
      sunCore.addColorStop(1, "#f43f5e");

      ctx.fillStyle = sunCore;
      ctx.shadowColor = "#f59e0b";
      ctx.shadowBlur = 35;
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // D. Render Solar System Orbital Rings & Orbiting Planets
      planets.forEach((planet) => {
        // Draw Orbital Elliptical Ring
        ctx.save();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.07)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(sunX, sunY, planet.radiusX, planet.radiusY, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Update Planet Orbital Position
        planet.angle += planet.speed;
        const planetX = sunX + Math.cos(planet.angle) * planet.radiusX;
        const planetY = sunY + Math.sin(planet.angle) * planet.radiusY;

        // Draw Planet Body
        ctx.save();
        ctx.fillStyle = planet.color;
        ctx.shadowColor = planet.glowColor;
        ctx.shadowBlur = planet.size * 3;
        ctx.beginPath();
        ctx.arc(planetX, planetY, planet.size, 0, Math.PI * 2);
        ctx.fill();

        // Planetary Rings (e.g. Saturn / Jupiter)
        if (planet.hasRings && planet.ringRadius) {
          ctx.strokeStyle = "rgba(253, 186, 116, 0.55)";
          ctx.lineWidth = 2.2;
          ctx.beginPath();
          ctx.ellipse(planetX, planetY, planet.ringRadius, planet.ringRadius * 0.35, Math.PI / 6, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Orbiting Moon
        if (planet.hasMoon) {
          planet.moonAngle = (planet.moonAngle || 0) + 0.06;
          const moonX = planetX + Math.cos(planet.moonAngle) * 12;
          const moonY = planetY + Math.sin(planet.moonAngle) * 6;
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(moonX, moonY, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      // E. Render Spiral Galaxy Core Dust Particles
      coreParticles.forEach((p) => {
        p.angle += p.speed;
        const curX = sunX + Math.cos(p.angle) * p.dist;
        const curY = sunY + Math.sin(p.angle) * p.dist * 0.52; // Tilted spiral

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(curX, curY, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // F. Spawn & Render Comets / Shooting Stars
      cometTimer++;
      if (cometTimer > 180) {
        spawnComet();
        cometTimer = Math.floor(Math.random() * 60);
      }

      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        if (!c.active) continue;

        c.x += Math.cos(c.angle) * c.speed;
        c.y += Math.sin(c.angle) * c.speed;
        c.alpha -= 0.009;

        if (c.x < -100 || c.x > width + 100 || c.y > height + 100 || c.alpha <= 0) {
          comets.splice(i, 1);
          continue;
        }

        const tailX = c.x - Math.cos(c.angle) * c.length;
        const tailY = c.y - Math.sin(c.angle) * c.length;

        const cometGrad = ctx.createLinearGradient(c.x, c.y, tailX, tailY);
        cometGrad.addColorStop(0, c.color);
        cometGrad.addColorStop(0.3, "rgba(255, 255, 255, 0.8)");
        cometGrad.addColorStop(1, "transparent");

        ctx.save();
        ctx.globalAlpha = Math.max(0, c.alpha);
        ctx.strokeStyle = cometGrad;
        ctx.lineWidth = 2.4;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Luminous Comet Head
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = c.color;
        ctx.shadowBlur = 16;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.headSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // G. Render Click Shockwaves
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
        ctx.lineWidth = 2.2;
        ctx.shadowColor = sw.color;
        ctx.shadowBlur = 24;
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
      className="fixed inset-0 pointer-events-none z-0 opacity-95 transition-opacity duration-1000"
      style={{ background: "#03030c" }}
    />
  );
}
