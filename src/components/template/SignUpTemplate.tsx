import React from "react";
import SignUpContent from "../organism/SignUpContent";
import SignUpContentModal from "../organism/SignUpContentModal";
import RadioButton from "../atoms/button/RadioButton";
export default function SignUpTemplate() {
  return (
    <>
      <SignUpContent />
      <SignUpContentModal />
      <SignUpContent />
      <SignUpContent />
      {/* <RadioButton /> */}
    </>
  );
}
