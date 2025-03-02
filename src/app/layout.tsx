import type { Metadata } from "next";
import "./globals.css";
import { LayoutEffectFix } from "../components/LayoutEffectFix";

// We're now using custom font imports from globals.css instead of Next.js font loader
// This allows us to use the typography principles with modern sans-serif fonts

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1e3a8a",
};

export const metadata: Metadata = {
  title: "LeadMagnet - Consigue más clientes sin gastar en ads",
  description: "Automatizamos tu captación de leads para que solo cierres ventas sin necesidad de publicidad pagada",
  openGraph: {
    title: "LeadMagnet - Consigue más clientes sin gastar en ads",
    description: "Automatizamos tu captación de leads para que solo cierres ventas sin necesidad de publicidad pagada",
    url: "https://leadmagnet.com",
    siteName: "LeadMagnet",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadMagnet - Consigue más clientes sin gastar en ads",
    description: "Automatizamos tu captación de leads para que solo cierres ventas sin necesidad de publicidad pagada",
  },
  alternates: {
    canonical: "https://leadmagnet.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className="antialiased"
        role="document"
      >
        <LayoutEffectFix />
        {children}
      </body>
    </html>
  );
}
