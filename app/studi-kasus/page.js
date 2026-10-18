import Image from 'next/image';
import Link from 'next/link';
import { KASUS, SITE } from '@/lib/citarasa';

export const metadata = {
  title: 'Studi Kasus',
  description: 'Tiga rumah makan yang berdiri sejak 1979, 1986, dan 1991 — dan apa yang berubah setelah menunya pindah ke ponsel pelanggan.',
  alternates: { canonical: `${SITE}/studi-kasus` },
};

export default function StudiKasus() {
  return (
    <main className="paper-texture bg-cream px-6 pt-32 pb-24">
      <div className="mx-auto max-w-5xl">
        <p className="sign-label text-enamel">Studi kasus</p>
        <h1 className="mt-4 max-w-3xl text-[2.6rem] leading-[1.05] text-soot md:text-6xl">Warung yang sudah lama, masalah yang baru</h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed">Tiga rumah makan dengan umur, kota, dan masalah yang berbeda. Resepnya tidak kami sentuh.</p>

        <ol className="mt-14 space-y-8">
          {KASUS.map((k, i) => (
            <li key={k.slug}>
              <Link href={`/studi-kasus/${k.slug}`} className={`plate ${i % 2 ? 'plate-mustard' : ''} grid gap-6 px-8 py-10 transition-transform hover:-translate-y-1 sm:px-12 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center`}>
                <span className="font-[family-name:var(--font-abril)] text-6xl leading-none md:text-7xl">{k.sejak}</span>
                <span>
                  <span className="sign-label block">{k.kota} · {k.generasi}</span>
                  <span className="mt-2 block font-[family-name:var(--font-abril)] text-3xl">{k.nama}</span>
                  <span className="mt-3 block leading-relaxed">{k.ringkas}</span>
                </span>
                <Image src={`/images/kasus/${k.slug}.webp`} alt="" width={160} height={160} className="hidden h-36 w-36 rounded-full object-cover ring-4 ring-soot/20 md:block" />
              </Link>
            </li>
          ))}
        </ol>
        <p className="sign-label mt-10 text-soot-soft">Nama warung dan angka di halaman ini adalah contoh untuk purwarupa desain.</p>
      </div>
    </main>
  );
}
