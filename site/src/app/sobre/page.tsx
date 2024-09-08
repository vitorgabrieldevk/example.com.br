// app/sobre/page.tsx
import RootLayout from "../layout";

export default function Sobre() {
  const metadata = {
    title: "Sobre Nós", 
    description: "Saiba mais sobre nossa empresa e equipe",
  };

  return (
    <RootLayout metadata={metadata}>
      <div className="container">
        <h1>Sobre Nós</h1>
        <p>Bem-vindo à página sobre nós!</p>
      </div>
    </RootLayout>
  );
}
