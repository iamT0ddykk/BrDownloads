import "./Opt.css";
import Butao from "../Butao";
import { IoMdHome } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
function Opt() {
  return (
    <>
      <div className="opt-div">
        <Butao
          icon={<IoMdHome></IoMdHome>}
          onClick={() => console.log()}
          link="/"
        ></Butao>

        <Butao
          icon={<IoMdDownload></IoMdDownload>}
          onClick={() => console.log()}
          link="/downloads"
        ></Butao>
      </div>
    </>
  );
}

export default Opt;
