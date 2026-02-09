import { motion } from "framer-motion";

const particles = [
  { size: 200, x: "10%", y: "20%", duration: 7, color: "hsl(217, 92%, 60%)" },
  { size: 150, x: "80%", y: "10%", duration: 9, color: "hsl(258, 90%, 66%)" },
  { size: 250, x: "65%", y: "60%", duration: 8, color: "hsl(189, 94%, 43%)" },
  { size: 100, x: "25%", y: "75%", duration: 10, color: "hsl(217, 92%, 60%)" },
  { size: 180, x: "45%", y: "35%", duration: 6.5, color: "hsl(258, 90%, 66%)" },
  { size: 120, x: "85%", y: "80%", duration: 11, color: "hsl(189, 94%, 43%)" },
];

export const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {particles.map((p, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full blur-3xl"
        style={{
          width: p.size,
          height: p.size,
          left: p.x,
          top: p.y,
          backgroundColor: p.color,
          opacity: 0.08,
        }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: p.duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);
