import type React from "react";
import "./Margem.css";

type margemChildren = {
  children: React.ReactNode;
};

export function Margem({ children }: margemChildren) {
  return <div className="margem-container">{children}</div>;
}
