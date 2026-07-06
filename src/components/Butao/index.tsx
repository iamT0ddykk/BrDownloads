import type React from "react";
import "./Button.css";
import type { MouseEventHandler } from "react";
import { Link } from "react-router";

type butaoProps = {
  children?: string;
  icon: React.ReactNode;
  onClick: MouseEventHandler;
  link?: string;
};

function Butao(children: butaoProps) {
  return (
    <Link to={children.link} onClick={children.onClick} className="btn">
      {children.icon && <span className="btn-icon">{children.icon}</span>}

      <span>{children.children}</span>
    </Link>
  );
}

export default Butao;
