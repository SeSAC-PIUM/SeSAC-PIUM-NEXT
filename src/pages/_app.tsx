import Header from "@/components/organism/Header";
import auth from "@/firebase/auth";
// import { auth } from "@/firebase";
import "@/styles/globals.css";
// import "@/styles/backup_style.css"
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Header />
      {isLoading ? <div>로딩중</div> : <Component {...pageProps} />}
    </>
  );
}
