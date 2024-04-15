// !GLOBAL CSS
import '@/app/ui/global.css';
// !FONTS
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${inter.className} antialiased`}>
      <body>{children}</body>
    </ html>
  );
}
