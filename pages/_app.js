import { SWRConfig } from "swr";
import GlobalStyle from "../styles.js";
import Header from "@/components/Header/Header.js";
import NavBar from "@/components/NavBar/index.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps,  }) {
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
      <ToastContainer/>
      <Header />
      <Component {...pageProps} />
      <NavBar />
    </SWRConfig>
  );
}
