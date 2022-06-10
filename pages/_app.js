import "../styles/globals.css";
import { Layout } from "../components/layout/layout";
import { ContextProvider } from "../context/context";
import Mouse from "../components/mouse/mouse";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
        <Mouse />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
