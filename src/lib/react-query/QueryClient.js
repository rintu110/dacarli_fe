import { QueryClient } from "react-query";

const DacarliClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default DacarliClient;
