import ProfileTemplate from "@/components/template/ProfileTemplate";
import auth from "@/firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Profile() {
  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser) {
      router.push("/signIn");
    }
  }, []);

  return (
    <>
      <ProfileTemplate />
    </>
  );
}
