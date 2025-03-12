import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: "Lapo-app | Good web application.",
  description: "Lapo-app is good.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className='relative h-full min-h-fit flex'>
        <div className="w-full h-fit min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
