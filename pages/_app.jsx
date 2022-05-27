import * as React from "react";
import "@/styles/globals.css";
import DacarliQueryProviders from "providers/QueryProvider";
import DacarliStyleProviders from "providers/ThemeProvider";

function Dacarli({ Component, pageProps }) {
  return (
    <DacarliStyleProviders>
      <DacarliQueryProviders pageProps={pageProps}>
        <Component {...pageProps} />
      </DacarliQueryProviders>
    </DacarliStyleProviders>
  );
}

export default Dacarli;
