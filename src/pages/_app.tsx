// it's global where layout is imported here
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/Layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
