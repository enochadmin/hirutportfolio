import { useState } from "react";
import videos from "../data/videos";
import * as images from "../assets/images";
import { Link } from "react-router-dom";

export default function Videos() {
  const [selected, setSelected] = useState(null);
  const [playInline, setPlayInline] = useState(false);

  const onCardClick = (video) => {
    if (video.youtubeUrl) {
      const playHere = window.confirm("Play this video on the page? Cancel to open on YouTube.");
      if (playHere) {
        setSelected(video);
        setPlayInline(true);
      } else {
        window.open(video.youtubeUrl, "_blank", "noopener,noreferrer");
      }
    } else {
      setSelected(video);
      setPlayInline(false);
    }
  };

  const close = () => {
    setSelected(null);
    setPlayInline(false);
  };

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Videos</p>
        <h2 className="mt-3 text-4xl font-semibold text-slate-900 md:text-5xl dark:text-white">Videos</h2>
        <p className="mt-2 text-slate-500">A small collection of demo videos and reels. Click a card to play or open on YouTube.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => {
          const thumb = images[video.thumbnail] || images.portraitImage;
          return (
            <button
              key={video.slug}
              onClick={() => onCardClick(video)}
              className="group block w-full text-left overflow-hidden rounded-2xl border border-slate-200/10 bg-white/5 p-0"
            >
              <div className="h-44 w-full overflow-hidden">
                <img src={thumb} alt={video.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{video.title}</h3>
                <div className="mt-2 text-sm text-slate-500">{video.youtubeUrl ? "YouTube" : "Local"}</div>
              </div>
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="max-w-4xl w-full rounded-2xl bg-white p-4 dark:bg-slate-900">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{selected.title}</h3>
              <div className="flex gap-2">
                {selected.youtubeUrl && (
                  <a
                    href={selected.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded px-3 py-1 text-sm text-blue-600"
                  >
                    Open on YouTube
                  </a>
                )}
                <button onClick={close} className="rounded px-3 py-1 text-sm">Close</button>
              </div>
            </div>

            <div className="mt-4">
              {playInline && selected.youtubeUrl ? (
                <div className="aspect-video w-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeId(selected.youtubeUrl)}?autoplay=1`}
                    title={selected.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full rounded"
                  />
                </div>
              ) : (
                <div className="text-slate-600 dark:text-slate-300">No inline player available for this video.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function getYouTubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
  } catch (e) {}
  return null;
}
