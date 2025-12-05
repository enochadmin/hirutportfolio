import { motion } from "framer-motion";

const timeline = [
  {
    title: "Lead SAP & Automation Architect",
    company: "Blue Ridge Consulting",
    period: "2022 — Present",
    detail:
      "Owning S/4HANA rollouts and building bespoke workflow apps that extend SAP into customer experiences.",
  },
  {
    title: "Senior Full-Stack Engineer",
    company: "Flux Systems",
    period: "2018 — 2022",
    detail:
      "Delivered ERP, HRIS, and OKR platforms used by 15k+ employees, focusing on composable UI systems.",
  },
  {
    title: "Digital Product Strategist",
    company: "Freelance",
    period: "2015 — 2018",
    detail:
      "Created interactive portfolios and visual identities for artists and agencies while mastering motion design.",
  },
];

const pillars = [
  { heading: "Experience Design", text: "Immersive storytelling, art direction, motion and spatial UI." },
  { heading: "Enterprise Stack", text: "SAP S/4HANA, SuccessFactors, Workflow automation, integrations." },
  { heading: "Custom Builds", text: "React, Node, Laravel, serverless functions, modern DevOps tooling." },
];

export default function About() {
  return (
    <div className="space-y-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">About</p>
        <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl dark:text-white">
          I bridge enterprise systems with artistic presentation.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          From SAP core modules to bespoke front-end experiences, I architect cohesive journeys that help
          leadership teams see their data, teams, and impact in living color. Every project blends rigorous
          systems thinking with emotive storytelling.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
  className="grid gap-6 rounded-3xl border border-slate-200/10 bg-white/5 p-6 md:grid-cols-3 dark:border-white/10 dark:bg-slate-900/40"
      >
        {pillars.map((pillar) => (
            <div key={pillar.heading} className="space-y-2">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-200">{pillar.heading}</p>
            <p className="text-slate-700 dark:text-slate-200">{pillar.text}</p>
          </div>
        ))}
      </motion.div>

      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Path</p>
        <div className="space-y-4">
          {timeline.map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-3xl border border-slate-200/10 bg-white/5 p-6 dark:border-white/10 dark:bg-slate-900/40"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="text-sm text-slate-400">{item.company}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.period}</span>
              </div>
              <p className="mt-4 text-slate-300">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
