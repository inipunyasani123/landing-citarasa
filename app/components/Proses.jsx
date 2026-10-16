import { PROSES } from '@/lib/citarasa';

export default function Proses() {
  return (
    <section id="proses" className="scroll-mt-16 bg-cream-2 px-6 py-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="sign-label mb-4 text-enamel">Proses</p>
        <h2 className="max-w-2xl text-[2rem] leading-[1.1] text-soot md:text-[2.8rem]">Dari foto menu di dinding sampai kasir yang yakin</h2>
        <ol className="mt-8 grid grid-cols-2 gap-x-5 gap-y-7 md:mt-12 md:grid-cols-4 md:gap-6">
          {PROSES.map(([j, d], i) => (
            <li key={j} className="border-t-4 border-enamel pt-5">
              <span className="font-[family-name:var(--font-abril)] text-3xl text-enamel sm:text-4xl">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 text-lg leading-snug text-soot sm:mt-3 sm:text-xl">{j}</h3>
              <p className="mt-2 text-sm leading-relaxed sm:text-base">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
