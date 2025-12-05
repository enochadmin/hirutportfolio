import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function Portfolio() {
  return (
    <div className="space-y-12">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Selected Work</p>
  <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl dark:text-white">Portfolio</h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          A mix of enterprise automation, interactive portfolios, and art-led digital experiences focused on clarity and
          emotion.
        </p>
      </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200/10 bg-white/5 p-0"
            >
              <Link to={`/portfolio/${project.slug}`} className="block">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="h-56 w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                <div className="relative space-y-2 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Case #{index + 1}</p>
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>

                  <div className="mt-4 flex gap-2">
                    <span className="rounded-full border border-slate-300/20 px-3 py-1 text-xs text-slate-900 dark:border-white/20 dark:text-white">View gallery</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
    </div>
  );
}
