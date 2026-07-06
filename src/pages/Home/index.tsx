import { Link } from "react-router";
import { Template } from "../../components/Template";
import "./Home.css";
export function Home() {
  return (
    <>
      <Template>
        <section className="hero">
          <div className="hero-text">
            <h1>
              Downloads <span>rápidos</span>, seguros e sem complicação.
            </h1>

            <p>faça downloads em alta velocidade tudo em um único lugar.</p>

            <div className="buttons">
              <Link to="/downloads" className="btn">
                Ir para Downloads
              </Link>
              <Link to="/about" className="btn secondary">
                Saiba Mais
              </Link>
            </div>
          </div>

          <div className="hero-image">
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

        <section id="recursos">
          <div className="title">
            <h2>Por que escolher nossa plataforma?</h2>
            <p>Tudo o que você precisa para baixar arquivos.</p>
          </div>

          <div className="features">
            <div className="card">
              <div className="icon">⚡</div>
              <h3>Alta velocidade</h3>
              <p>Downloads rápidos com infraestrutura otimizada.</p>
            </div>

            <div className="card">
              <div className="icon">🔒</div>
              <h3>Segurança</h3>
              <p>Proteção dos seus arquivos</p>
            </div>

            <div className="card">
              <div className="icon">☁️</div>
              <h3>Armazenamento</h3>
              <p>Baixe seus arquivos de qualquer lugar.</p>
            </div>

            <div className="card">
              <div className="icon">📱</div>
              <h3>Responsivo</h3>
              <p>
                Funciona perfeitamente em computadores, tablets e celulares.
              </p>
            </div>
          </div>
        </section>

        <section id="estatisticas">
          <div className="title">
            <h2>Nossos números</h2>
          </div>

          <div className="stats">
            <div className="stat">
              <h2>1M+</h2>
              <p>Downloads</p>
            </div>

            <div className="stat">
              <h2>250K</h2>
              <p>Usuários</p>
            </div>

            <div className="stat">
              <h2>99.9%</h2>
              <p>Disponibilidade</p>
            </div>

            <div className="stat">
              <h2>24/7</h2>
              <p>Suporte</p>
            </div>
          </div>
        </section>

        <section id="cta">
          <div className="cta">
            <h2>Comece gratuitamente hoje.</h2>

            <p>
              Em poucos minutos baixe e compartilhe seus arquivos com rapidez,
              segurança e praticidade.
            </p>

            <Link to="/downloads" className="btn">
              Ir para Downloads
            </Link>
          </div>
        </section>
      </Template>
    </>
  );
}
