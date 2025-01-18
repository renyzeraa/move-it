import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "../styles/global.css";
import Head from "next/head";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Move.it"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="shortcut icon" href="../../public/favicon.png" type="image/x-icon" />
      </Head>
      <body className={`${inter.variable} ${rajdhani.variable}`}>
        {children}
      </body>
    </html>
  );
}
