import Header from "@/components/organism/Header";
// import auth from "@/firebase/auth";
// import { auth } from "@/firebase";
import "@/styles/globals.css";
import "@/styles/calendar.css";
// import "@/styles/backup_style.css"
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import auth from "@/firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import db from "@/firebase/db";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();
  const init = async () => {
    await auth.authStateReady();
    setLoading(false);
  };

  const userInfoCheck = async () => {
    await auth.authStateReady();

    if (auth.currentUser) {
      const docRef = doc(db, "user", auth.currentUser.uid);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();

        // 조건 검사
        if (!data.name) {
          router.push("/signUp_001_Basic");
        }
      } else {
        // 관련 데이터 없으면 기본 데이터 생성
        const newDocRef = doc(db, "user", auth.currentUser.uid);
        await setDoc(newDocRef, {
          userEmail: auth.currentUser.email,
          adReceive: false,
        });
        router.push("/signUp_001_Basic");
      }
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    // 로그인 유저 정보 확인
    userInfoCheck();
  }, [Component]);

  return (
    <>
      <Header />
      {isLoading ? <div>로딩중</div> : <Component {...pageProps} />}
    </>
  );
}
