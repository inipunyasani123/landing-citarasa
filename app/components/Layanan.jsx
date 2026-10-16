import { LAYANAN } from '@/lib/citarasa';

export default function Layanan() {
  return (
    <section id="layanan" className="scroll-mt-16 bg-cream px-6 py-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-4 md:mb-12 md:gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] md:items-end">
          <div>
            <p className="sign-label mb-4 text-enamel">Empat plakat layanan</p>
            <h2 className="text-[2rem] leading-[1.1] text-soot md:text-[2.8rem]">Dikerjakan satu per satu, dibayar sekali</h2>
          </div>
          <p className="leading-relaxed">Tidak ada langganan bulanan. Pilih yang paling mendesak dulu — kebanyakan warung mulai dari menu digital.</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {LAYANAN.map((l) => (
            <li key={l.no} id={`plakat-${l.no}`} className="plate flex scroll-mt-24 flex-col px-7 py-8 sm:px-9 sm:py-10">
              <span className="sign-label text-[#f2c36a]">Plakat {l.no}</span>
              <h3 className="mt-3 text-3xl text-cream">{l.judul}</h3>
              <p className="mt-3 leading-relaxed text-cream/90 sm:mt-4">{l.isi}</p>
              <p className="mt-auto pt-5 font-[family-name:var(--font-abril)] text-xl text-cream sm:pt-6">mulai {l.mulai}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
