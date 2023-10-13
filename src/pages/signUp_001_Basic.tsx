import React, { useEffect } from "react";

import SignUpBasicTemplate from "@/components/template/SignUpBasicTemplate";
import auth from "@/firebase/auth";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser) {
      router.push("/signIn");
    }
  }, []);

  return (
    <>
      <SignUpBasicTemplate />
    </>
  );
}
