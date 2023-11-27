import { SWRConfig } from "swr";
import GlobalStyle from "../styles.js";
import Header from "@/components/Header/Header.js";
import NavBar from "@/components/NavBar/index.js";

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const response = await fetch(...args);
          if (!response.ok) {
            throw new Error(`Request with ${JSON.stringify(args)} failed.`);
          }
          return await response.json();
        },
      }}
    >
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <NavBar />
    </SWRConfig>
  );
}
