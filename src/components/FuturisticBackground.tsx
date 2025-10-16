import { motion } from 'motion/react';

export function FuturisticBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20" />
      
      {/* Animated particles/dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Flowing wave lines from bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden">
        {/* Left wave */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <svg
            viewBox="0 0 400 200"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,200 Q100,150 200,180 T400,160 L400,200 Z"
              fill="url(#waveGradient1)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1 }}
            />
            <defs>
              <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 0.4)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Right wave */}
        <motion.div
          className="absolute bottom-0 right-0 w-full h-full"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.8 }}
        >
          <svg
            viewBox="0 0 400 200"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,180 Q100,160 200,190 T400,170 L400,200 Z"
              fill="url(#waveGradient2)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1.5 }}
            />
            <defs>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* Vertical light streaks */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
            style={{
              left: `${10 + i * 12}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Central glowing element */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl" />
      </motion.div>

      {/* Abstract geometric shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }, (_, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{
                duration: 3,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


