import { Logo } from "../Logo";
import Opt from "../Opt";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <Logo></Logo>

      <Opt></Opt>
    </header>
  );
}

export default Navbar;
