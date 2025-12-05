import { motion } from "framer-motion";
import { portraitImage } from "../assets/images";
import { Link } from "react-router-dom";

const stats = [
  { label: "Years Experience", value: "8+" },
  { label: "Projects Delivered", value: "40+" },
  { label: "SAP Rollouts", value: "12" },
];

const expertise = [
  "SAP S/4HANA",
  "SuccessFactors",
  "React & Node",
  "Automation Strategy",
];

export default function Home() {
  return (
    <div className="grid gap-12 md:grid-cols-2 md:items-center">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 rounded-full border border-slate-200/10 bg-slate-50/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
        >
          Architect + Technologist
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl dark:text-white"
        >
          I help enterprises transform workflows into captivating digital
          experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-300"
        >
          A multidisciplinary consultant blending SAP, custom development, and
          art direction to deliver immersive portfolio experiences and
          enterprise-grade solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="/portfolio"
            className="rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-105"
          >
            View portfolio
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-slate-300/30 px-8 py-4 font-semibold text-slate-900 dark:border-white/30 dark:text-slate-100 hover:bg-slate-50/5 dark:hover:bg-white/10 transition"
          >
            Let's collaborate
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="grid grid-cols-3 rounded-3xl border border-slate-200/10 bg-white/5 p-6 text-center dark:border-white/10 dark:bg-slate-900/50"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-cyan-500/40 via-transparent to-blue-600/40 blur-[120px]" />

        <div className="relative rounded-[3rem] border border-slate-200/10 bg-gradient-to-br from-white to-slate-50 p-6 shadow-2xl shadow-blue-900/50 dark:border-white/10 dark:from-slate-900 dark:to-slate-950">
          <img
            src={portraitImage}
            alt="Hirut Habtewold"
            className="h-[28rem] w-full rounded-[2rem] object-cover object-top"
          />

          <div className="mt-6 grid gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur dark:bg-slate-800/30">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Focus</p>
            <div className="flex flex-wrap gap-2">
              {expertise.map((item) => (
                <span key={item} className="rounded-full bg-slate-50/10 px-4 py-1 text-xs text-slate-900 dark:bg-white/10 dark:text-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}