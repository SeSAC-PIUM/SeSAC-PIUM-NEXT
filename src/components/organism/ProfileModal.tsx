import Image from "next/image";
import React from "react";
import BorderBottom from "../atoms/label/BorderBottom";
import logout from "../../img/logout.svg";
import profileImg from "../../img/profile_img.svg";
import profile from "../../img/mypage.svg";
import star from "../../img/star.svg";
import reservation from "../../img/reservation.svg";
import Link from "next/link";

interface ProfileModalProps {
	className?: string;
}

export default function ProfileModal({}: ProfileModalProps) {
	const className = "flex items-center gap-4 mx-6";
	return (
		<>
			<div className="border rounded  py-6 text-[12px] bg-white w-[220px] h-auto ">
				<div className="">
					<Link href={"#"} className={className}>
						<Image src={profileImg} alt="profileImg" className=" w-[48px] " />
						<span className="font-semibold text-[14px]">홍길동</span>
					</Link>
				</div>

				<div className="my-3 border-[1px] border-[--color-grayscale-100]"></div>

				<div className="flex flex-col gap-6 py-2 ">
					<Link href={"/profile"} className={className}>
						<Image src={star} alt="star" />
						<span>프로젝트 관리</span>
					</Link>
					<Link href={"/profile"} className={className}>
						<Image src={profile} alt="profile" />
						<span>프로필 설정</span>
					</Link>
					<Link href={"/reservation"} className={className}>
						<Image src={reservation} alt="reservation" />
						<span>공간예약</span>
					</Link>
				</div>
				<div className="flex justify-center">
					<div className="my-3 border-[1px] border-[--color-grayscale-100] w-4/5"></div>
				</div>
				<Link href={"#"} className={className}>
					<Image src={logout} alt="logout" />
					<span>로그아웃</span>
				</Link>
			</div>
		</>
	);
}
