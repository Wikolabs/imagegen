import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "ImageGen — Visuels IA sur-mesure en quelques secondes",
  description: "Pipeline de génération d'images IA brand-consistent — campagnes, réseaux sociaux, catalogues produits générés automatiquement.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body style={{ fontFamily: "var(--font-body)", background: "#fdf2f8" }}>{children}</body>
    </html>
  );
}
