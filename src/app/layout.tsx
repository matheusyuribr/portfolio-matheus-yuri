
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matheus Yuri",
  description: "Portfolio de Matheus Yuri, um desenvolvedor web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </body>
      
    </html>
  );
}
