import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'; // keep this if you're using global styles

import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Virtual Reality Landing Page',
  description: 'Created with Next.js and Bootstrap',
  /* Force white navbar toggler icon */


};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}