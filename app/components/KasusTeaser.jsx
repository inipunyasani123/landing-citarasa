import Image from 'next/image';
import Link from 'next/link';
import { KASUS } from '@/lib/citarasa';

export default function KasusTeaser() {
  return (
    <section className="bg-soot px-6 py-16 text-cream md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end md:mb-12">
          <div>
            <p className="sign-label mb-4 text-mustard">Studi kasus</p>
            <h2 className="text-[2rem] leading-[1.1] text-cream md:text-[2.8rem]">Tiga warung, tiga masalah yang berbeda</h2>
          </div>
          <Link href="/studi-kasus" className="sign-label inline-flex min-h-11 shrink-0 items-center border-b-2 border-mustard text-mustard hover:text-cream">
            Baca semuanya
          </Link>
        </div>
        <ul className="grid gap-4 md:grid-cols-3 md:gap-6">
          {KASUS.map((k) => (
            <li key={k.slug}>
              <Link href={`/studi-kasus/${k.slug}`} className="plate plate-mustard block h-full px-6 py-7 transition-transform hover:-translate-y-1 sm:px-7 sm:py-9">
                <Image src={`/images/kasus/${k.slug}.webp`} alt="" width={640} height={480} sizes="(min-width: 768px) 20rem, 5rem" className="float-right ml-4 h-20 w-20 rounded-full object-cover ring-4 ring-soot/20 md:float-none md:mb-6 md:ml-0 md:aspect-[4/3] md:h-auto md:w-full md:rounded-none md:ring-0 md:border-4 md:border-soot/80" />
                <span className="sign-label">Sejak {k.sejak} · {k.kota}</span>
                <h3 className="mt-3 text-2xl leading-tight">{k.nama}</h3>
                <p className="mt-4 leading-relaxed">{k.ringkas}</p>
                <span className="sign-label mt-6 inline-block border-b-2 border-soot pb-0.5">Baca kasusnya</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="sign-label mt-8 text-cream/70">Nama warung dan angka dalam studi kasus adalah contoh untuk purwarupa desain.</p>
      </div>
    </section>
  );
}
