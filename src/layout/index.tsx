import React from "react";
import "./index.css";

type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Layout = ({ children }: Props) => {
  return <div className="layout__container">{children}</div>;
};

export default Layout;
