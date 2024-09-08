// app/produtos/[id]/page.tsx
'use client'; // Adiciona esta linha para marcar o componente como Client Component

import { useParams } from 'next/navigation';

export default function Produtos() {
  const params = useParams();
  const id = params.id as string;
  const slug = params.slug as string;

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <p>ID do Produto: {id}</p>
      <p>Slug do Produto: {slug}</p>
    </div>
  );
}
