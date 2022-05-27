import * as React from "react";
import ResponsiveAppBar from "components/AppBar";

function Layout({ children }) {
  return (
    <>
      <ResponsiveAppBar />
      {children}
    </>
  );
}

export default Layout;
