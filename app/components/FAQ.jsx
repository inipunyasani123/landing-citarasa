import { FAQ as DAFTAR } from '@/lib/citarasa';

export default function FAQ() {
  return (
    <section className="bg-cream-2 px-6 py-16 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 md:gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="sign-label mb-4 text-enamel">Pertanyaan pemilik</p>
          <h2 className="text-[2rem] leading-[1.1] text-soot md:text-[2.6rem]">Yang biasa ditanyakan sebelum mulai</h2>
        </div>
        <div className="border-t-2 border-soot">
          {DAFTAR.map((f) => (
            <details key={f.t} className="group border-b border-soot/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-bold text-soot [&::-webkit-details-marker]:hidden">
                {f.t}
                <span aria-hidden="true" className="font-[family-name:var(--font-abril)] text-2xl text-enamel transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-6 leading-relaxed">{f.j}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
