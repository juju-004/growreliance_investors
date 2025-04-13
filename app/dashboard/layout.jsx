import React from "react";
import Nav from "./components/nav";
import Dock from "./components/dock";

function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <div className="md:hidden">
        <Dock className={" dock dock-md"} />
      </div>
    </div>
  );
}

export default Layout;
