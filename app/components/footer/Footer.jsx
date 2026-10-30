import Link from 'next/link';
import { KASUS } from '@/lib/citarasa';

export default function Footer() {
  return (
    <footer className="bg-soot px-6 text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 py-14 md:grid-cols-[minmax(0,1.4fr)_repeat(2,minmax(0,1fr))]">
        <div>
          <p className="font-[family-name:var(--font-abril)] text-2xl text-cream">CitaRasa <span className="text-mustard">Digital</span></p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/80">
            Menu digital, foto menu, profil peta, dan pesanan WhatsApp untuk rumah makan yang sudah lama berdiri.
          </p>
        </div>
        <nav aria-label="Studi kasus">
          <p className="sign-label mb-4 text-mustard">Studi kasus</p>
          <ul className="space-y-0.5 text-sm text-cream/80">
            {KASUS.map((k) => (
              <li key={k.slug}><Link href={`/studi-kasus/${k.slug}`} className="inline-block py-3 hover:text-cream">{k.nama}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Halaman">
          <p className="sign-label mb-4 text-mustard">Halaman</p>
          <ul className="space-y-0.5 text-sm text-cream/80">
            <li><Link href="/#layanan" className="inline-block py-3 hover:text-cream">Layanan</Link></li>
            <li><Link href="/#proses" className="inline-block py-3 hover:text-cream">Proses</Link></li>
            <li><Link href="/#audit" className="inline-block py-3 hover:text-cream">Audit menu gratis</Link></li>
          </ul>
        </nav>
      </div>
      <p className="sign-label mx-auto max-w-6xl border-t border-cream/15 py-6 leading-[1.8] text-cream/70">
        © 2026 CitaRasa Digital · Nama, angka, dan harga di situs ini adalah contoh untuk purwarupa desain.
      </p>
    </footer>
  );
}
