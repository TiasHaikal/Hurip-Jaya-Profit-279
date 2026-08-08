import { stats } from "@/lib/config";

export default function StatsStrip() {
  return (
    <section className="border-b border-line/70 bg-panel/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-line/70 px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-4 py-8 text-center md:py-10">
            <p className="font-mono text-2xl text-paper sm:text-3xl">
              {s.value}
              <span className="text-brasslight">{s.suffix}</span>
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-ash2">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
