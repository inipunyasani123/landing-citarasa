import Link from 'next/link';
import { LAYANAN } from '@/lib/citarasa';

/* Hero sebagai papan nama enamel: satu pelat besar berisi janji utamanya,
   dan deretan pelat kecil berisi empat layanan. */
export default function Hero() {
  return (
    <section className="paper-texture relative overflow-hidden bg-cream px-6 pt-24 pb-14 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-5xl text-center">
        <p className="sign-label text-enamel">Untuk rumah makan berusia 20 tahun ke atas</p>

        <div className="plate mx-auto mt-6 max-w-4xl px-7 py-10 sm:mt-8 sm:px-14 sm:py-16">
          <h1 className="text-[2.4rem] leading-[1.05] text-cream sm:text-6xl lg:text-[4.2rem]">
            Papan namanya boleh tua.
          </h1>
          <p className="mt-5 font-[family-name:var(--font-abril)] text-2xl leading-snug text-[#f2c36a] sm:text-3xl">
            Pesanannya harus bisa masuk dari ponsel.
          </p>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-soot md:mt-10">
          CitaRasa Digital memindahkan warung dan rumah makan legendaris ke ponsel pelanggan — menu,
          foto, peta, dan pesanan — tanpa mengganti resep, papan kayu, maupun kasir lama.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 md:mt-9">
          <Link href="#audit" className="inline-flex justify-center bg-enamel px-8 py-4 font-bold text-cream hover:bg-enamel-2">
            Minta audit menu gratis
          </Link>
          <Link href="/studi-kasus" className="inline-flex justify-center border-2 border-soot px-8 py-4 font-bold text-soot hover:bg-soot hover:text-cream">
            Lihat tiga studi kasus
          </Link>
        </div>

        {/* Empat pelat kecil = daftar isi layanan; masing-masing menaut ke pelat besarnya di bawah. */}
        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 md:mt-14" aria-label="Empat layanan">
          {LAYANAN.map((l) => (
            <li key={l.no}>
              <a href={`#plakat-${l.no}`} className="plate plate-mustard block h-full px-4 py-4 transition-transform hover:-translate-y-0.5 sm:py-5">
                <span className="sign-label block">{l.no}</span>
                <span className="mt-1 block font-[family-name:var(--font-abril)] text-base leading-snug sm:text-lg">{l.judul}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
