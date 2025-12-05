import { motion } from "framer-motion";

const blobs = [
  { size: "w-[32rem] h-[32rem]", top: "-10%", left: "-5%", color: "from-cyan-400/40 to-blue-500/20" },
  { size: "w-[26rem] h-[26rem]", top: "60%", left: "70%", color: "from-violet-500/30 to-fuchsia-500/10" },
  { size: "w-[18rem] h-[18rem]", top: "20%", left: "65%", color: "from-amber-400/40 to-orange-500/10" },
];

export default function AnimatedBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_50%)]" />

      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, rotate: 360 }}
          transition={{ duration: 18 + index * 4, repeat: Infinity, repeatType: "mirror" }}
          className={`absolute ${blob.size}`}
          style={{ top: blob.top, left: blob.left }}
        >
          <div className={`h-full w-full rounded-full bg-gradient-to-br ${blob.color} blur-3xl`} />
        </motion.div>
      ))}

      <div className="absolute inset-y-0 w-full bg-[linear-gradient(130deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0)_70%,rgba(255,255,255,0.06)_100%)]" />
    </div>
  );
}

