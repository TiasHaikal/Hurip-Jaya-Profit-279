import { platforms } from "@/lib/config";

export default function PlatformLinks() {
  return (
    <section id="daftar" className="bg-panel/30">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow text-xs uppercase text-brasslight/90">Cara Ikut</p>
        <h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">
          Pilih platform, lalu mulai copy.
        </h2>
        <p className="mt-4 max-w-xl text-ash">
          Saya aktif di tiga platform berikut.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {platforms.map((p, i) => (
            <div
              key={p.name}
              className="flex flex-col justify-between rounded-md border border-line bg-panel p-6"
            >
              <div>
                <span className="font-mono text-xs text-ash2">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl text-paper">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  {p.description}
                </p>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-sm border border-brass/60 px-4 py-2.5 text-center text-sm font-medium text-brasslight transition-colors hover:bg-brass hover:text-ink"
              >
                {p.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
