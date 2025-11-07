'use client';

import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  horizontalMove: number;
}

export default function ParticleEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // 只在客戶端生成粒子，避免 SSR hydration mismatch
    const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 5 + 3, // 3-8px (更大更明顯)
      duration: Math.random() * 10 + 15, // 15-25秒
      delay: Math.random() * -20, // 錯開開始時間
      opacity: Math.random() * 0.3 + 0.4, // 0.4-0.7 (更明顯)
      horizontalMove: Math.random() * 100 - 50, // -50 到 50px
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5]">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute top-0 rounded-full"
          style={{
            left: particle.left,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            backgroundColor: '#808080',
            animation: `fall-${particle.id} ${particle.duration}s linear ${particle.delay}s infinite`,
          }}
        />
      ))}
      <style jsx>{`
        ${particles.map((particle) => `
          @keyframes fall-${particle.id} {
            0% {
              transform: translateY(-10px) translateX(0);
            }
            100% {
              transform: translateY(100vh) translateX(${particle.horizontalMove}px);
            }
          }
        `).join('')}
      `}</style>
    </div>
  );
}
