// src/app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Seu Título Padrão</title>
        <meta name="description" content="Descrição padrão da página" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
