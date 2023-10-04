import auth from "@/firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";

//로그인 정보 체크 및 반환 Hook
export default function useUser() {
  const router = useRouter();

  const user = auth.currentUser;
  if (user === null) {
    router.push("/login");
  }

  return user;
}
