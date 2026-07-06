import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="badge">🚀 Plataforma rápida e segura</span>

        <h1>Downloads rápidos para qualquer arquivo.</h1>

        <p>
          Compartilhe documentos, imagens, vídeos e projetos com segurança,
          velocidade e uma interface moderna.
        </p>

        <div className="buttons">
          <button className="primary">Começar Agora</button>

          <button className="secondary">Saiba Mais</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="mockup">
          <div className="file">
            📦 Projeto.zip
            <button>Baixar</button>
          </div>

          <div className="file">
            📄 Manual.pdf
            <button>Baixar</button>
          </div>

          <div className="file">
            🖼 Wallpaper.png
            <button>Baixar</button>
          </div>

          <div className="file">
            🎵 Música.mp3
            <button>Baixar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
