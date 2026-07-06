import { Margem } from "../../components/Margem";
import { Template } from "../../components/Template";
import "./About.css";
import { FaCloud, FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";

export function About() {
  return (
    <Template>
      <Margem>
        <section className="about">
          <div className="about-header">
            <span className="about-badge">SOBRE NÓS</span>

            <h1>Downloads rápidos. Simples. Seguros.</h1>

            <p>
              Nossa missão é oferecer uma plataforma moderna para compartilhar
              arquivos com velocidade, segurança e praticidade. Queremos tornar
              o envio e o download de arquivos uma experiência rápida e
              agradável para todos.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <FaRocket className="icon" />

              <h3>Performance</h3>

              <p>
                Nossa plataforma é otimizada para oferecer downloads rápidos e
                uma experiência fluida.
              </p>
            </div>

            <div className="about-card">
              <FaShieldAlt className="icon" />

              <h3>Segurança</h3>

              <p>
                Protegemos seus arquivos com tecnologias modernas e conexões
                criptografadas.
              </p>
            </div>

            <div className="about-card">
              <FaCloud className="icon" />

              <h3>Disponibilidade</h3>

              <p>
                Seus arquivos ficam disponíveis sempre que você precisar, em
                qualquer dispositivo.
              </p>
            </div>

            <div className="about-card">
              <FaUsers className="icon" />

              <h3>Comunidade</h3>

              <p>
                Milhares de usuários utilizam nossa plataforma diariamente para
                compartilhar seus arquivos.
              </p>
            </div>
          </div>

          <div className="about-story">
            <div>
              <h2>Nossa História</h2>

              <p>
                O BRDownloads nasceu com o objetivo de facilitar a forma como
                pessoas compartilham arquivos na internet. Acreditamos que
                enviar e baixar documentos não precisa ser complicado.
              </p>

              <p>
                Estamos sempre evoluindo nossa plataforma, adicionando novos
                recursos e melhorando a experiência dos usuários.
              </p>
            </div>
          </div>
        </section>
      </Margem>
    </Template>
  );
}
