import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Conectai WiFi | Internet de Alta Velocidade",
  description:
    "A melhor internet da região com fibra óptica de última geração. Planos a partir de R$79/mês. Instalação grátis, suporte 24h e sem fidelidade.",
  keywords: [
    "internet",
    "fibra óptica",
    "wifi",
    "provedor",
    "banda larga",
    "alta velocidade",
  ],
  authors: [{ name: "Conectai WiFi" }],
  openGraph: {
    title: "Conectai WiFi | Internet de Alta Velocidade para eventos",
    description:
      "A melhor internet da região com fibra óptica de última geração.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased select-none!`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
