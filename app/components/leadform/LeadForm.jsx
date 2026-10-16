'use client';

import { useState } from 'react';

const DAPAT = [
  'Menu mana yang sebaiknya ditonjolkan',
  'Cara menulis harga supaya mudah dibaca',
  'Foto yang perlu diganti lebih dulu',
  'Salah ketik dan istilah yang membingungkan',
];

export default function LeadForm() {
  const [selesai, setSelesai] = useState(null);

  const kirim = (e) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    // Purwarupa desain: tidak ada data yang dikirim ke mana pun.
    setSelesai(String(d.get('warung') || 'rumah makan Anda'));
  };

  const input = 'w-full border-2 border-soot/20 bg-cream px-4 py-3 text-soot focus:border-enamel focus:outline-none';

  return (
    <section id="audit" className="scroll-mt-16 bg-cream px-6 py-16 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-8 md:gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="sign-label mb-4 text-enamel">Audit menu gratis</p>
          <h2 className="text-[2rem] leading-[1.1] text-soot md:text-[2.8rem]">Kirim menu Anda, kami kembalikan satu halaman catatan</h2>
          <p className="mt-5 leading-relaxed">Dalam tiga hari kerja. Tidak ada kewajiban memakai jasa kami setelahnya.</p>
          <ul className="mt-6 space-y-2.5 md:mt-8 md:space-y-3">
            {DAPAT.map((d) => (
              <li key={d} className="flex gap-3 text-soot">
                <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-enamel" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="enamel-frame bg-cream-2 p-6 sm:p-10">
          {selesai ? (
            <div role="status" className="py-8">
              <p className="sign-label text-enamel">Tercatat</p>
              <p className="mt-4 font-[family-name:var(--font-abril)] text-3xl text-soot">Terima kasih. Menu {selesai} akan kami baca dengan teliti.</p>
              <p className="mt-4 leading-relaxed">Ini purwarupa desain, jadi tidak ada data yang dikirim dan tidak ada catatan audit yang akan datang.</p>
              <button type="button" onClick={() => setSelesai(null)} className="sign-label mt-6 border-2 border-soot px-4 py-3 text-soot hover:bg-soot hover:text-cream">Isi ulang</button>
            </div>
          ) : (
            <form onSubmit={kirim} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nama" className="sign-label mb-2 block text-soot">Nama Anda</label>
                  <input id="nama" name="nama" required autoComplete="name" className={input} />
                </div>
                <div>
                  <label htmlFor="surel" className="sign-label mb-2 block text-soot">Surel</label>
                  <input id="surel" name="surel" type="email" required autoComplete="email" className={input} />
                </div>
                <div>
                  <label htmlFor="warung" className="sign-label mb-2 block text-soot">Nama rumah makan</label>
                  <input id="warung" name="warung" required className={input} />
                </div>
                <div>
                  <label htmlFor="sejak" className="sign-label mb-2 block text-soot">Berdiri sejak (tahun)</label>
                  <input id="sejak" name="sejak" type="number" min="1900" max="2026" inputMode="numeric" className={input} />
                </div>
              </div>
              <div>
                <label htmlFor="kota" className="sign-label mb-2 block text-soot">Kota</label>
                <input id="kota" name="kota" required autoComplete="address-level2" className={input} />
              </div>
              <p className="text-sm leading-relaxed">Foto menunya kami minta lewat surel balasan — tidak perlu diunggah di sini.</p>
              <button type="submit" className="w-full bg-enamel py-4 font-bold text-cream hover:bg-enamel-2">Minta audit menu gratis</button>
              <p className="text-xs leading-relaxed">Purwarupa desain — formulir ini tidak mengirim data ke mana pun.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
