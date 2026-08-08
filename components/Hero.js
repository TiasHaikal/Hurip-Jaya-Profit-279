import { profile, equityCurve, platforms } from "@/lib/config";

function buildPath(points, width, height) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const stepX = width / (points.length - 1);

  const coords = points.map((p, i) => {
    const x = i * stepX;
    const y = height - ((p - min) / range) * (height - 24) - 12;
    return [x, y];
  });

  const d = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");

  const areaD = `${d} L${width},${height} L0,${height} Z`;

  return { d, areaD, coords };
}

export default function Hero() {
  const width = 640;
  const height = 260;
  const { d, areaD, coords } = buildPath(equityCurve, width, height);
  const lastPoint = coords[coords.length - 1];

  return (
    <section className="relative overflow-hidden border-b border-line/70">
      <div className="absolute inset-x-0 top-0 h-64 bg-grid-fade" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div className="rise" style={{ animationDelay: "0.05s" }}>
          <p className="eyebrow mb-5 text-xs uppercase text-brasslight/90">
            Trade Smarter. Follow the Signal. Copy with Confidence.
          </p>
          <h1 className="font-display text-4xl leading-[1.1] text-paper sm:text-5xl">
            Copy Trading <em className="not-italic text-brasslight">Lebih Mudah</em>,
            Strategi Lebih Terarah.
          </h1>
          <p className="mt-6 max-w-md text-ash">{profile.tagline}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-brass px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:bg-brasslight"
              >
                {p.cta}
              </a>
            ))}
          </div>
        </div>

        <div className="rise" style={{ animationDelay: "0.2s" }}>
          <div className="rounded-md border border-line bg-panel/70 p-5">
            <div className="mb-4 flex items-center justify-between font-mono text-xs text-ash2">
              <span>EQUITY CURVE — AKUN SIGNAL</span>
              <span className="text-gain">▲ live</span>
            </div>
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full"
              role="img"
              aria-label="Grafik kenaikan equity akun trading dari waktu ke waktu"
            >
              <defs>
                <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3ECF8E" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#3ECF8E" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[0, 1, 2, 3].map((i) => (
                <line
                  key={i}
                  x1="0"
                  x2={width}
                  y1={(height / 4) * i + 12}
                  y2={(height / 4) * i + 12}
                  stroke="#232938"
                  strokeWidth="1"
                />
              ))}
              <path d={areaD} fill="url(#areaFill)" stroke="none" />
              <path
                d={d}
                fill="none"
                stroke="#3ECF8E"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="equity-path"
                style={{ "--dash-length": 1400 }}
              />
              <circle cx={lastPoint[0]} cy={lastPoint[1]} r="4.5" fill="#3ECF8E" />
            </svg>
            <div className="mt-4 flex justify-between border-t border-line pt-4 font-mono text-xs text-ash2">
              <span>12 BULAN TERAKHIR</span>
              <span className="text-gain">240% GROWTH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
