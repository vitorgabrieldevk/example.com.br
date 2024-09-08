// src/app/layout.tsx
import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

interface LayoutProps {
  children: React.ReactNode;
  metadata?: Metadata;
}

export default function RootLayout({
  children,
  metadata = {
    title: 'TESTE',
    description: 'Página de Demonstração',
  },
}: LayoutProps) {
  return (
    <html lang="pt-br">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
