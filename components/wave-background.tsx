'use client';

import { motion } from 'framer-motion';

export default function WaveBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#0b0d1a]" />

      {/* Thick Light Beams */}
      {[
        {
          gradient: 'linear-gradient(135deg, rgba(102, 255, 204, 0.6), rgba(102, 255, 204, 0))',
          width: '400px',
          delay: 0
        },
        {
          gradient: 'linear-gradient(135deg, rgba(147, 51, 255, 0.5), rgba(147, 51, 255, 0))',
          width: '600px',
          delay: 3
        },
        {
          gradient: 'linear-gradient(135deg, rgba(255, 102, 204, 0.5), rgba(255, 102, 204, 0))',
          width: '500px',
          delay: 6
        },
        {
          gradient: 'linear-gradient(135deg, rgba(51, 153, 255, 0.5), rgba(51, 153, 255, 0))',
          width: '550px',
          delay: 9
        }
      ].map((beam, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            background: beam.gradient,
            width: beam.width,
            height: '300vh',
            filter: 'blur(80px)',
            transform: 'rotate(-45deg)',
            transformOrigin: '0 0',
            left: `${(i * 30) - 20}%`,
            top: '-100%'
          }}
          initial={{ opacity: 0, x: -200 }}
          animate={{ 
            opacity: [0.6, 0.9, 0.6],
            x: [-200, 200, -200],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            delay: beam.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Enhanced Stars with Different Sizes */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          return (
            <motion.div
              key={`star-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(0.5px)'
              }}
              initial={{
                opacity: Math.random() * 0.5 + 0.3,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, size > 2 ? 1.5 : 1.2, 1]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          );
        })}
      </div>

      {/* Enhanced Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          filter: 'contrast(180%) brightness(160%)',
        }}
      />
    </div>
  );
}