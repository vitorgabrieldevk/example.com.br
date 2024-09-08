// app/layout.tsx
import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

export default function RootLayout({
  children,
  metadata = { title: "TESTE", description: "Página de Demonstração" },
}: {
  children: React.ReactNode;
  metadata?: Metadata;
}) {
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
