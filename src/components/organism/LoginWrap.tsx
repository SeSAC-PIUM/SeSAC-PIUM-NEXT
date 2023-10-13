import { useState } from "react";

import HeaderSearchForm from "../molecule/HeaderSearchForm";
import AlarmButton from "../atoms/button/AlarmButton";
import ProfileButton from "../atoms/button/ProfileButton";
import LoginLink from "../atoms/link/LoginLink";
import auth from "@/firebase/auth";
import { useLocation } from "react-router-dom";
import ProfileModal from "./ProfileModal";

export default function LoginWrap() {
	const user = auth.currentUser;

	return (
		<div className="flex items-center gap-[24px]">
			{/* <button onClick={() => setCheck(!check)}> login test</button> */}
			<HeaderSearchForm />
			{user ? (
				<>
					{/* <button
						onClick={() => {
							auth.signOut();
							location.reload();
						}}
					>
						Log Out
					</button> */}
					<AlarmButton />
					<ProfileButton />
				</>
			) : (
				<LoginLink />
			)}
		</div>
	);
}
