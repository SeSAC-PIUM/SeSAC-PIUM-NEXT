import React, { useEffect, useState } from "react";
import ProfileMain from "../molecule/ProfileMain";
import TemplateCard from "../atoms/card/TemplateCard";
import ProfileTab from "../molecule/ProfileTab";
import auth from "@/firebase/auth";
import db from "@/firebase/db";
import { doc, getDoc } from "firebase/firestore";
import basicInfo from "@/data/basicInfo";

export default function ProfileTemplate() {
  const [user, setUser] = useState({});

  const init = async () => {
    if (auth.currentUser) {
      const docRef = doc(db, "user", auth.currentUser.uid);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        setUser(data);
      }
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <TemplateCard>
        <ProfileMain data={user} />
        <ProfileTab data={user} />
      </TemplateCard>
    </>
  );
}
