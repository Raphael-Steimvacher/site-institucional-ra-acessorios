import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Toaster } from "sonner";

import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = "https://raacessoriosevidracaria.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "RA Acessórios e Vidraçaria | Orçamento de Vidros em SP",
  description:
    "Vidraçaria em Poá e região para sacadas, fachadas glazing, box, guarda-corpos, espelhos e projetos sob medida. Peça orçamento pelo WhatsApp.",
  applicationName: "RA Acessórios e Vidraçaria",
  keywords: [
    "vidraçaria",
    "orçamento de vidro",
    "envidraçamento de sacada",
    "box de banheiro",
    "fachada glazing",
    "guarda-corpo de vidro",
    "Poá",
    "Vila Monteiro",
  ],
  authors: [{ name: "RA Acessórios e Vidraçaria" }],
  openGraph: {
    title: "RA Acessórios e Vidraçaria",
    description:
      "Projetos de vidro sob medida com acabamento premium, instalação segura e orçamento rápido pelo WhatsApp.",
    url: siteUrl,
    siteName: "RA Acessórios e Vidraçaria",
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} dark`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
