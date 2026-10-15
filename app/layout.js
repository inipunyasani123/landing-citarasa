import { Abril_Fatface, Lora } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import Footer from "./components/footer/Footer";
import "./globals.css";

const abril = Abril_Fatface({ variable: "--font-abril", subsets: ["latin"], weight: "400" });
const lora = Lora({ variable: "--font-lora", subsets: ["latin"] });

const __jsonld = {"@context":"https://schema.org","@type":"Organization","name":"CitaRasa Digital","description":"Jasa digitalisasi untuk rumah makan legendaris","url":"https://landing-citarasa.pintuweb.id"};

export const metadata = {
  metadataBase: new URL("https://landing-citarasa.pintuweb.id"),
  title: { default: "CitaRasa Digital — Rumah Makan Lama, Pesanan dari Ponsel", template: "%s — CitaRasa Digital" },
  description: "CitaRasa Digital memindahkan warung dan rumah makan legendaris ke ponsel pelanggan: menu digital, foto menu, profil peta, dan pesanan WhatsApp. Minta audit menu gratis.",
  applicationName: "CitaRasa Digital",
  keywords: ["solusi digital kuliner", "bisnis kuliner", "digitalisasi restoran", "marketing kuliner"],
  authors: [{ name: "CitaRasa Digital" }],
  creator: "CitaRasa Digital",
  publisher: "CitaRasa Digital",
  alternates: { canonical: "https://landing-citarasa.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://landing-citarasa.pintuweb.id",
    siteName: "CitaRasa Digital",
    title: "CitaRasa Digital — Rumah Makan Lama, Pesanan dari Ponsel",
    description: "CitaRasa Digital memindahkan warung dan rumah makan legendaris ke ponsel pelanggan: menu digital, foto menu, profil peta, dan pesanan WhatsApp. Minta audit menu gratis.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "CitaRasa Digital — Rumah Makan Lama, Pesanan dari Ponsel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CitaRasa Digital — Rumah Makan Lama, Pesanan dari Ponsel",
    description: "CitaRasa Digital memindahkan warung dan rumah makan legendaris ke ponsel pelanggan: menu digital, foto menu, profil peta, dan pesanan WhatsApp. Minta audit menu gratis.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${abril.variable} ${lora.variable} antialiased`}>
        <>
          <a href="#konten" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-enamel focus:px-4 focus:py-2 focus:text-cream">Lompat ke konten</a>
          <SiteHeader />
          <div id="konten">{children}</div>
          <Footer />
        </>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=citarasa" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
