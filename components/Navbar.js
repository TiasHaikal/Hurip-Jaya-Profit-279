import { profile } from "@/lib/config";

const links = [
  { href: "#portofolio", label: "Portofolio" },
  { href: "#profil", label: "Profil" },
  { href: "#sertifikat", label: "Sertifikat" },
  { href: "#daftar", label: "Cara Ikut" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg italic text-paper">
          {profile.name}
        </a>
        <ul className="hidden gap-8 text-sm text-ash md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-paper">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#daftar"
          className="rounded-sm border border-brass/60 px-4 py-2 text-xs font-medium uppercase tracking-widest text-brasslight transition-colors hover:bg-brass/10"
        >
          Mulai Copy
        </a>
      </nav>
    </header>
  );
}
