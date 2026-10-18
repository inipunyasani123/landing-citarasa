import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { KASUS, SITE, kasusBySlug } from '@/lib/citarasa';

export function generateStaticParams() {
  return KASUS.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const k = kasusBySlug(slug);
  if (!k) return {};
  return {
    title: `${k.nama}, sejak ${k.sejak}`,
    description: `${k.nama} (${k.kota}, sejak ${k.sejak}): ${k.ringkas}`,
    alternates: { canonical: `${SITE}/studi-kasus/${k.slug}` },
  };
}

export default async function Kasus({ params }) {
  const { slug } = await params;
  const k = kasusBySlug(slug);
  if (!k) notFound();
  const lain = KASUS.filter((x) => x.slug !== k.slug);

  return (
    <main className="bg-cream pt-28">
      <header className="paper-texture px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <p className="sign-label text-enamel"><Link href="/studi-kasus" className="hover:underline">Studi kasus</Link> · {k.kota}</p>
          <div className="plate mt-6 px-8 py-12 text-center sm:px-14">
            <p className="sign-label text-[#f2c36a]">Sejak {k.sejak}</p>
            <h1 className="mt-3 text-[2.4rem] leading-[1.05] text-cream md:text-6xl">{k.nama}</h1>
            <p className="mt-4 text-cream/90">{k.generasi} · {k.kota}</p>
          </div>
        </div>
      </header>

      <section aria-labelledby="foto" className="px-6 pt-4">
        <div className="mx-auto max-w-4xl">
          <h2 id="foto" className="sr-only">Foto menu</h2>
          {k.foto.lama ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <figure>
                <Image src={`/images/kasus/${k.slug}-lama.webp`} alt="Foto yang sama dibuat seperti foto lama di internet: buram, kekuningan, dan silau lampu kilat" width={960} height={720} sizes="(min-width: 960px) 27rem, 46vw" className="aspect-[4/3] h-auto w-full border-4 border-soot/15 object-cover" />
                <figcaption className="sign-label mt-3 text-soot-soft">Sebelum · foto lama (simulasi)</figcaption>
              </figure>
              <figure>
                <Image src={`/images/kasus/${k.slug}.webp`} alt={k.foto.alt} width={960} height={720} sizes="(min-width: 960px) 27rem, 46vw" className="aspect-[4/3] h-auto w-full border-4 border-mustard object-cover" />
                <figcaption className="sign-label mt-3 text-enamel">Sesudah · foto ulang</figcaption>
              </figure>
              <p className="col-span-2 text-sm leading-relaxed text-soot-soft">{k.foto.ket} Foto “sebelum” dibuat dari foto yang sama untuk menunjukkan masalahnya.</p>
            </div>
          ) : (
            <figure>
              <Image src={`/images/kasus/${k.slug}.webp`} alt={k.foto.alt} width={960} height={720} sizes="(min-width: 960px) 56rem, 100vw" className="aspect-[16/9] h-auto w-full border-4 border-mustard object-cover" />
              <figcaption className="mt-3 text-sm leading-relaxed text-soot-soft">{k.foto.ket}</figcaption>
            </figure>
          )}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          <div className="space-y-5 text-lg leading-relaxed text-soot">
            <h2 className="sign-label text-enamel">Ceritanya</h2>
            {k.cerita.map((p) => <p key={p.slice(0, 20)}>{p}</p>)}
          </div>
          <div>
            <h2 className="sign-label text-enamel">Yang dikerjakan</h2>
            <ul className="mt-5 space-y-3">
              {k.dikerjakan.map((d) => (
                <li key={d} className="flex gap-3 text-soot">
                  <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-enamel" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="angka" className="bg-soot px-6 py-16 text-cream">
        <div className="mx-auto max-w-4xl">
          <h2 id="angka" className="sign-label text-mustard">Sebelum dan sesudah</h2>
          <table className="mt-6 w-full border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-cream/30">
                <th scope="col" className="sign-label py-3 pr-4 font-bold text-cream/80">Ukuran</th>
                <th scope="col" className="sign-label py-3 pr-4 font-bold text-cream/80">Sebelum</th>
                <th scope="col" className="sign-label py-3 font-bold text-mustard">Sesudah</th>
              </tr>
            </thead>
            <tbody>
              {k.angka.map(([u, a, b]) => (
                <tr key={u} className="border-b border-cream/15">
                  <th scope="row" className="py-4 pr-4 font-normal text-cream">{u}</th>
                  <td className="py-4 pr-4 font-[family-name:var(--font-abril)] text-xl text-cream/85">{a}</td>
                  <td className="py-4 font-[family-name:var(--font-abril)] text-2xl text-mustard">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <blockquote className="mt-12 border-l-4 border-mustard pl-6">
            <p className="font-[family-name:var(--font-abril)] text-2xl leading-snug text-cream md:text-3xl">“{k.kutipan}”</p>
            <footer className="sign-label mt-4 text-cream/75">{k.pemilik}, {k.nama}</footer>
          </blockquote>
          <p className="sign-label mt-10 text-cream/70">Nama dan angka di atas adalah contoh untuk purwarupa desain.</p>
        </div>
      </section>

      <nav aria-label="Studi kasus lain" className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="sign-label mb-6 text-enamel">Studi kasus lain</p>
          <ul className="grid gap-6 sm:grid-cols-2">
            {lain.map((x) => (
              <li key={x.slug}>
                <Link href={`/studi-kasus/${x.slug}`} className="plate plate-mustard flex items-center gap-5 px-7 py-8 transition-transform hover:-translate-y-1">
                  <Image src={`/images/kasus/${x.slug}.webp`} alt="" width={72} height={72} className="h-16 w-16 shrink-0 rounded-full object-cover ring-4 ring-soot/20 sm:h-[4.5rem] sm:w-[4.5rem]" />
                  <span>
                    <span className="sign-label">Sejak {x.sejak} · {x.kota}</span>
                    <span className="mt-2 block font-[family-name:var(--font-abril)] text-2xl">{x.nama}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#audit" className="mt-10 inline-flex bg-enamel px-7 py-4 font-bold text-cream hover:bg-enamel-2">Minta audit menu gratis untuk warung Anda</Link>
        </div>
      </nav>
    </main>
  );
}
