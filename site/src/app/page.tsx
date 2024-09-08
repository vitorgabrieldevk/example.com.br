export default function Home() {
  return (
    <div className="container">
        <header className="my-4">
          <h1 className="text-center">Bem-vindo ao Meu Site</h1>
          <p className="lead text-center">Este é um exemplo simples usando Bootstrap com Next.js.</p>
        </header>

        <main>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagem de exemplo"/>
                <div className="card-body">
                  <h5 className="card-title">Título do Card</h5>
                  <p className="card-text">
                    Alguns exemplos rápidos para construir o título do card e compor o conteúdo do card.
                  </p>
                  <a href="#" className="btn btn-primary">Ir para algum lugar</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagem de exemplo"/>
                <div className="card-body">
                  <h5 className="card-title">Título do Card</h5>
                  <p className="card-text">
                    Alguns exemplos rápidos para construir o título do card e compor o conteúdo do card.
                  </p>
                  <a href="#" className="btn btn-secondary">Ir para algum lugar</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Imagem de exemplo"/>
                <div className="card-body">
                  <h5 className="card-title">Título do Card</h5>
                  <p className="card-text">
                    Alguns exemplos rápidos para construir o título do card e compor o conteúdo do card.
                  </p>
                  <a href="#" className="btn btn-success">Ir para algum lugar</a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="text-center my-4">
          <p>&copy; 2024 Meu Site. Todos os direitos reservados.</p>
        </footer>
      </div>
  );
}
