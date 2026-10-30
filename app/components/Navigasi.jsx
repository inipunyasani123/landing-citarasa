'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const NAV = [
  ['/#layanan', 'Layanan'],
  ['/studi-kasus', 'Studi kasus'],
  ['/#proses', 'Proses'],
  ['/#audit', 'Audit menu gratis'],
];

/* Navigasi utama + menu ponsel. Di ponsel panelnya berupa papan nama enamel merah berpaku keling: nama tiap bagian dalam huruf Abril Fatface krem, nomor plakat di kirinya.
   Menu tertutup sendiri saat pindah halaman, menekan Escape (fokus kembali ke
   tombol), atau mengetuk di luar panel. */
export default function Navigasi({ children }) {
  const path = usePathname();
  const [buka, setBuka] = useState(false);
  const tombol = useRef(null);
  const panel = useRef(null);

  useEffect(() => setBuka(false), [path]);

  useEffect(() => {
    if (!buka) return undefined;
    const tutup = (e) => {
      if (e.type === 'keydown' && e.key !== 'Escape') return;
      if (e.type === 'pointerdown' && (panel.current?.contains(e.target) || tombol.current?.contains(e.target))) return;
      setBuka(false);
      if (e.type === 'keydown') tombol.current?.focus();
    };
    document.addEventListener('keydown', tutup);
    document.addEventListener('pointerdown', tutup);
    return () => {
      document.removeEventListener('keydown', tutup);
      document.removeEventListener('pointerdown', tutup);
    };
  }, [buka]);

  const aktif = (href) => (!href.includes('#') && href !== '/' && path.startsWith(href) ? 'page' : undefined);

  return (
    <>
      <nav aria-label="Navigasi utama" className="hidden items-center gap-8 md:flex">
        {NAV.map(([href, label]) => (
          <Link key={href} href={href} aria-current={aktif(href)} className="sign-label inline-flex min-h-11 items-center text-soot-soft transition-colors hover:text-enamel aria-[current=page]:text-enamel">
            {label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        {children}
        <button
          ref={tombol}
          type="button"
          aria-expanded={buka}
          aria-controls="menu-ponsel"
          onClick={() => setBuka((b) => !b)}
          className="sign-label inline-flex h-11 min-w-[4.75rem] items-center justify-center border-2 border-soot/25 px-3 text-soot md:hidden"
        >
          {buka ? 'Tutup' : 'Menu'}
        </button>
      </div>
      <nav id="menu-ponsel" ref={panel} aria-label="Navigasi ponsel" hidden={!buka} className="absolute inset-x-0 top-full bg-cream/95 px-4 pt-3 pb-4 shadow-[0_18px_30px_-24px_rgb(43_32_25/0.6)] backdrop-blur-md md:hidden">
        <ol className="plate mx-auto max-w-6xl px-7 py-5">
          {NAV.map(([href, label], i) => (
            <li key={href} className="relative border-b border-cream/20 last:border-b-0">
              <Link href={href} onClick={() => setBuka(false)} aria-current={aktif(href)} className="flex items-baseline gap-4 py-3 text-cream aria-[current=page]:text-[#f2c36a]">
                <span className="sign-label w-6 text-[#f2c36a]">0{i + 1}</span>
                <span className="font-[family-name:var(--font-abril)] text-xl">{label}</span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
