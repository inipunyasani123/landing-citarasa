import Link from 'next/link';
import Navigasi from './Navigasi';

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-soot/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-6">
        <Link href="/" className="inline-flex min-h-11 items-center font-[family-name:var(--font-abril)] text-lg whitespace-nowrap text-enamel sm:text-xl">
          CitaRasa <span className="text-soot">Digital</span>
        </Link>
        <Navigasi>
          <Link href="/#audit" className="inline-flex h-11 items-center bg-enamel px-3 text-sm font-bold whitespace-nowrap text-cream hover:bg-enamel-2 sm:px-4">
            Audit<span className="hidden sm:inline">&nbsp;menu</span>&nbsp;gratis
          </Link>
        </Navigasi>
      </div>
    </header>
  );
}
