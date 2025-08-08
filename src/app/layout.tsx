import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eduardo Albquerque Dev',
  description: 'Portfólio de Luiz Eduardo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
