import { certificates } from "@/lib/config";

export default function Certifications() {
  return (
    <section id="sertifikat" className="border-b border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow text-xs uppercase text-brasslight/90">
          Sertifikat &amp; Penghargaan
        </p>
        <h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">
          Sertifikat dan penghargaan HJP 279 ID
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {certificates.map((c) => (
            <figure
              key={c.src}
              className="overflow-hidden rounded-md border border-line bg-panel"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.src}
                alt={c.caption}
                className="aspect-[4/3] w-full object-contain bg-panel2 p-4"
              />
              <figcaption className="border-t border-line px-4 py-3 font-mono text-xs text-ash2">
                {c.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
