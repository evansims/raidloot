import "../styles/globals.css";
import Layout from "../components/layout";
import { AppStateProvider } from "../contexts/state";

export default function MyApp({ Component, pageProps }) {
  return (
    <AppStateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppStateProvider>
  );
}
