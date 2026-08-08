"use client";

import { useEffect, useState } from "react";
import { portfolioShots } from "@/lib/config";

export default function PortfolioGallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;
  const active = isOpen ? portfolioShots[activeIndex] : null;

  // Tutup dengan tombol Escape, kunci scroll halaman saat lightbox terbuka
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i + 1) % portfolioShots.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) => (i - 1 + portfolioShots.length) % portfolioShots.length);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <section id="portofolio" className="border-b border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow text-xs uppercase text-brasslight/90">Portofolio</p>
        <h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">
          Statement asli, bukan hasil edit.
        </h2>
        <p className="mt-4 max-w-xl text-ash">
          Screenshot histori transaksi langsung dari platform trading. Klik
          untuk lihat lebih jelas.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {portfolioShots.map((shot, i) => (
            <figure
              key={shot.src}
              className="group overflow-hidden rounded-md border border-line bg-panel"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Perbesar foto: ${shot.caption}`}
                className="relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden bg-panel2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={i < 2 ? "eager" : "lazy"}
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
                  <span className="rounded-sm border border-brass/60 bg-ink/70 px-3 py-1.5 font-mono text-xs text-brasslight">
                    Perbesar
                  </span>
                </span>
              </button>
              <figcaption className="flex items-center justify-between border-t border-line px-4 py-3 font-mono text-xs text-ash2">
                <span>{shot.caption}</span>
                <span className="text-gain">verified</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={() => setActiveIndex(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Tutup"
            className="absolute right-4 top-4 rounded-sm border border-line px-3 py-2 font-mono text-xs text-ash hover:border-brass/60 hover:text-brasslight sm:right-8 sm:top-8"
          >
            Tutup ✕
          </button>

          {portfolioShots.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(
                    (activeIndex - 1 + portfolioShots.length) % portfolioShots.length
                  );
                }}
                aria-label="Foto sebelumnya"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-sm border border-line px-3 py-3 font-mono text-ash hover:border-brass/60 hover:text-brasslight sm:left-6"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex((activeIndex + 1) % portfolioShots.length);
                }}
                aria-label="Foto berikutnya"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm border border-line px-3 py-3 font-mono text-ash hover:border-brass/60 hover:text-brasslight sm:right-6"
              >
                ›
              </button>
            </>
          )}

          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-4xl overflow-auto"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={active.src}
              alt={active.caption}
              className="max-h-[80vh] w-full rounded-md border border-line object-contain"
            />
            <figcaption className="mt-3 text-center font-mono text-xs text-ash2">
              {active.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
