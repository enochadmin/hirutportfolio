import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const channels = [
  { icon: Mail, label: "Email", value: "henok@example.com", href: "mailto:henok@example.com" },
  { icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
  { icon: MapPin, label: "Based in", value: "Addis Ababa → Remote", href: "#" },
];

export default function Contact() {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Contact</p>
          <h2 className="mt-2 text-4xl font-semibold text-slate-900 dark:text-white">Let's build something visionary.</h2>
          <p className="mt-4 text-slate-300">
            Send a note about portfolio collaborations, SAP engagements, or live installation concepts. I typically
            reply within two business days.
          </p>
        </div>

        <div className="space-y-4">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-4 rounded-2xl border border-slate-200/10 bg-white/5 px-5 py-4 transition hover:translate-x-1 dark:border-white/10 dark:bg-slate-900/40"
            >
              <span className="rounded-2xl bg-white/10 p-3">
                <Icon className="h-5 w-5 text-blue-200" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{label}</p>
                <p className="text-lg text-slate-900 dark:text-white">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[2rem] border border-slate-200/10 bg-white/5 p-6 shadow-2xl shadow-blue-900/30 dark:border-white/10 dark:bg-slate-900/40"
      >
        <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
            Name
            <input className="w-full rounded-2xl border border-slate-300/20 bg-transparent px-4 py-3 text-slate-900 dark:border-white/20 dark:text-white focus:border-blue-400 focus:outline-none" />
          </label>
          <label className="space-y-2 text-sm text-slate-300">
            Company
            <input className="w-full rounded-2xl border border-slate-300/20 bg-transparent px-4 py-3 text-slate-900 dark:border-white/20 dark:text-white focus:border-blue-400 focus:outline-none" />
          </label>
        </div>
        <label className="mt-4 block space-y-2 text-sm text-slate-300">
          Email
          <input className="w-full rounded-2xl border border-slate-300/20 bg-transparent px-4 py-3 text-slate-900 dark:border-white/20 dark:text-white focus:border-blue-400 focus:outline-none" />
        </label>
        <label className="mt-4 block space-y-2 text-sm text-slate-300">
          Project Vision
          <textarea
            rows={5}
            className="w-full rounded-2xl border border-slate-300/20 bg-transparent px-4 py-3 text-slate-900 dark:border-white/20 dark:text-white focus:border-blue-400 focus:outline-none"
          />
        </label>
        <button
          type="button"
          className="mt-6 w-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.01]"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}
