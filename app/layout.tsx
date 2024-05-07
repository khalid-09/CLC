import type { Metadata } from 'next';
import '../styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: 'Comedy Laughter Club',
  description: 'A stand up comedy streaming website',
};
const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={GeistMono.className}>
        {' '}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
