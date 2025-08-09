import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/themeToggle/theme-provider';

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
    <html lang="pt-br" suppressHydrationWarning>
      <body className="bg-black text-white">
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
