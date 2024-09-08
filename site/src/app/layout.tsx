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
  metadata,
}: LayoutProps) {
  const defaultMetadata: Metadata = {
    title: 'TESTE',
    description: 'Página de Demonstração',
  };

  // Merge metadata with default values
  const finalMetadata = { ...defaultMetadata, ...metadata };

  return (
    <html lang="pt-br">
      <head>
        <title>{finalMetadata.title}</title>
        <meta name="description" content={finalMetadata.description} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
