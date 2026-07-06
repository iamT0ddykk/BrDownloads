import { Margem } from "../../components/Margem";
import { Template } from "../../components/Template";
import "./notFound.css";
import video from "./nyan-cat.gif";
export function NotFound() {
  return (
    <>
      <Template>
        <Margem>
          <div className="notfound-text">
            <h1>Pagina não encontrada</h1>

            <h2>Erro 404</h2>
          </div>
          <img src={video} alt="" />
        </Margem>
      </Template>
    </>
  );
}
