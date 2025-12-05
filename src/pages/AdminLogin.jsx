import { useState } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [uploads, setUploads] = useState([]);
  const [status, setStatus] = useState("");

  const onChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setStatus("Authenticated locally (mock). Hook up your API for production.");
  };

  const handleUpload = (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;
    const previews = files.map((file) => ({
      name: file.name,
      size: `${(file.size / 1024).toFixed(1)} KB`,
      url: URL.createObjectURL(file),
    }));
    setUploads((prev) => [...previews, ...prev]);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[2rem] border border-amber-200/20 bg-amber-50/5 p-6 text-amber-100"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-amber-200">Admin only</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">Private login for media curation.</h1>
        <p className="mt-3 text-sm text-amber-100">
          This route is intentionally hidden from the public navigation. Secure it with real authentication before
          shipping.
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        <form
          onSubmit={handleLogin}
          className="rounded-[2rem] border border-slate-200/10 bg-white/5 p-6 shadow-2xl shadow-slate-900/40 dark:border-white/10 dark:bg-slate-900/40"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Sign in</p>
          <div className="mt-4 space-y-4">
            <label className="block text-sm text-slate-200">
              Email
              <input
                name="email"
                type="email"
                value={credentials.email}
                onChange={onChange}
                className="mt-2 w-full rounded-2xl border border-slate-300/20 bg-transparent px-4 py-3 text-slate-900 dark:border-white/20 dark:text-white focus:border-blue-400 focus:outline-none"
                required
              />
            </label>
            <label className="block text-sm text-slate-200">
              Password
              <input
                name="password"
                type="password"
                value={credentials.password}
                onChange={onChange}
                className="mt-2 w-full rounded-2xl border border-slate-300/20 bg-transparent px-4 py-3 text-slate-900 dark:border-white/20 dark:text-white focus:border-blue-400 focus:outline-none"
                required
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-amber-500/40"
          >
            Unlock dashboard
          </button>
          {status && <p className="mt-4 text-xs text-amber-200">{status}</p>}
        </form>

        <div className="rounded-[2rem] border border-slate-200/10 bg-white/5 p-6 shadow-2xl shadow-slate-900/40 dark:border-white/10 dark:bg-slate-900/40">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Upload gallery assets</p>
          <label className="mt-6 flex cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-slate-300/20 bg-white/5 px-6 py-10 text-center text-slate-700 dark:border-white/20 dark:bg-slate-800/20 dark:text-slate-300 transition hover:border-white/40">
            <Upload className="h-10 w-10 text-blue-200" />
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Drop images here</p>
              <p className="text-sm text-slate-400">PNG, JPG up to 10MB</p>
            </div>
            <input type="file" accept="image/*" multiple className="hidden" onChange={handleUpload} />
          </label>

          {uploads.length > 0 && (
            <div className="mt-6 space-y-3">
              {uploads.map((file) => (
                <div key={file.url} className="flex items-center gap-3 rounded-2xl border border-slate-200/10 bg-white/5 p-3 dark:border-white/10 dark:bg-slate-800/20">
                  <img src={file.url} alt={file.name} className="h-12 w-12 rounded-xl object-cover" />
                  <div className="flex-1">
                    <p className="text-sm text-slate-900 dark:text-white">{file.name}</p>
                    <p className="text-xs text-slate-400">{file.size}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

