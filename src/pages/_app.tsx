import Header from "@/components/organism/Header";
import "@/styles/globals.css";
// import "@/styles/backup_style.css"
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
