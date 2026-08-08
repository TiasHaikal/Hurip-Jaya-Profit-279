import { profile } from "@/lib/config";

export default function About() {
  return (
    <section id="profil" className="border-b border-line/70 bg-panel/30">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[280px_1fr] md:items-start">
        <div className="overflow-hidden rounded-md border border-line">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.photo}
            alt={`Foto ${profile.name}`}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div>
          <p className="eyebrow text-xs uppercase text-brasslight/90">Profil</p>
          <h2 className="mt-3 font-display text-3xl text-paper sm:text-4xl">
            {profile.name}
          </h2>
          <p className="mt-1 font-mono text-sm text-ash2">{profile.title}</p>

          <p className="mt-6 max-w-2xl leading-relaxed text-ash">{profile.bio}</p>

          <dl className="mt-8 grid max-w-md grid-cols-2 gap-6 border-t border-line pt-6">
            <div>
              <dt className="text-xs uppercase tracking-widest text-ash2">
                Pengalaman
              </dt>
              <dd className="mt-1 font-mono text-lg text-paper">
                {profile.experienceYears} tahun
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-ash2">
                Berbasis di
              </dt>
              <dd className="mt-1 font-mono text-lg text-paper">
                {profile.location}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
