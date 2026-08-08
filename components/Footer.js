import { profile, contact, disclaimer } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-8 border-b border-line pb-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg italic text-paper">
              {profile.name}
            </p>
            <p className="mt-1 text-sm text-ash2">{profile.title}</p>
          </div>
          <div className="flex gap-6 text-sm text-ash">
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              Telegram
            </a>
            <a href={`mailto:${contact.email}`} className="hover:text-paper">
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 rounded-md border border-line/70 bg-panel/50 p-5">
          <p className="text-xs uppercase tracking-widest text-ash2">
            Peringatan Risiko
          </p>
          <p className="mt-2 max-w-3xl text-xs leading-relaxed text-ash2">
            {disclaimer}
          </p>
        </div>

        <p className="mt-8 font-mono text-xs text-ash2">
          © {new Date().getFullYear()} {profile.name}. Seluruh hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
