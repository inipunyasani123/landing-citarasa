import { MASALAH } from '@/lib/citarasa';

export default function Masalah() {
  return (
    <section className="bg-cream-2 px-6 py-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl md:mb-12">
          <p className="sign-label mb-4 text-enamel">Yang biasanya hilang</p>
          <h2 className="text-[2rem] leading-[1.1] text-soot md:text-[2.8rem]">
            Rasanya tidak berubah. Cara orang menemukannya yang berubah.
          </h2>
        </div>
        <ul className="grid gap-px bg-soot/15 sm:grid-cols-2">
          {MASALAH.map(([j, d], i) => (
            <li key={j} className="bg-cream-2 px-5 py-6 sm:p-7">
              <span className="font-[family-name:var(--font-abril)] text-3xl text-enamel">{i + 1}.</span>
              <h3 className="mt-2 text-xl text-soot sm:mt-3">{j}</h3>
              <p className="mt-2 leading-relaxed">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
