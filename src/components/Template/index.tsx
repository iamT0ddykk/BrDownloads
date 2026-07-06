import React from "react";

import Navbar from "../Navbar";
import { Foot } from "../Foot";

type templateChildren = {
  children: React.ReactNode;
};

export function Template({ children }: templateChildren) {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Foot></Foot>
    </>
  );
}
