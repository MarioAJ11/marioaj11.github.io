import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { PageWrapper } from "@/components/page-wrapper";

export const metadata: Metadata = {
  title: "Mario Alguacil Juárez - Desarrollador Backend",
  description: "Portafolio personal de Mario Alguacil Juárez - Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
  icons: {
    icon: [
      { url: '/logo.png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <PageWrapper>
          <Header />
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
