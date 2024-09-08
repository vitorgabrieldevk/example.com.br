// app/layout.tsx
import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  metadata?: Metadata;
}) {
  return (
    <html lang="pt-br">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
