import * as React from "react";
import { Hydrate, QueryClientProvider } from "react-query";
import DacarliClient from "lib/react-query/QueryClient";

function DacarliQueryProviders({ children, pageProps }) {
  return (
    <QueryClientProvider client={DacarliClient}>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
}

export default DacarliQueryProviders;
