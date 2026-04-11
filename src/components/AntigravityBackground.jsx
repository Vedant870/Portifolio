/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useState } from 'react';

const generateParticles = (count) => {
  return [...Array(count)].map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));
};

const AntigravityBackground = () => {
  const [particles] = useState(() => generateParticles(40));

  return (
    <div className="antigravity-container">
      {/* Deep Space Background Mesh */}
      <div className="mesh-overlay" />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: ['-20vh', '20vh', '-20vh'],
            x: ['-10vw', '10vw', '-10vw'],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Parallax Orbs */}
      <motion.div
        className="orb orb--primary"
        animate={{
          y: [-50, 50, -50],
          rotate: [0, 90, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <motion.div
        className="orb orb--secondary"
        animate={{
          y: [30, -40, 30],
          x: [-30, 40, -30],
          rotate: [0, -120, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="orb orb--accent"
        animate={{
          y: [-20, 40, -20],
          scale: [0.9, 1.2, 0.9],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default AntigravityBackground;
