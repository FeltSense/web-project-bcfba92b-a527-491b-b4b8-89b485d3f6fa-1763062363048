import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ 
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Creative Business - Transform Your Ideas Into Reality',
  description: 'Professional creative services including brand identity, digital marketing, growth strategy, and creative production. Transform your business with innovative solutions.',
  keywords: 'creative business, brand identity, digital marketing, creative services, design agency',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}