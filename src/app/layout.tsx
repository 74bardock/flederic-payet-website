import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MetaboSync — La Méthode SM',
  description: 'Synchronisation métabolique et effort métabolique développés par Flédéric Payet.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <LanguageProvider>
          <Header />
          <div className="flex-1">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}