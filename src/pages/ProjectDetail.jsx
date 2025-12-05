import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="py-12">
        <p className="text-lg">Project not found.</p>
        <Link to="/portfolio" className="text-blue-500 underline">Back to portfolio</Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Project</p>
        <h2 className="mt-3 text-4xl font-semibold text-slate-900 dark:text-white">{project.title}</h2>
        <p className="mt-2 text-sm text-slate-500">A gallery of images for this project.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {project.images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-2xl bg-white/5">
            <img src={src} alt={`${project.title} ${i + 1}`} className="h-64 w-full object-cover" />
          </div>
        ))}
      </div>

      <div>
        <Link to="/portfolio" className="inline-block rounded-full border border-slate-300/20 px-4 py-2 text-sm text-slate-900 dark:text-white">Back to portfolio</Link>
      </div>
    </div>
  );
}
