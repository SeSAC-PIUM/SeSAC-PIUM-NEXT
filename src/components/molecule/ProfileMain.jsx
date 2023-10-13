import React from "react";
import DefaultLabel from "../atoms/label/DefaultLabel";
import LargeLabel from "../atoms/label/LargeLabel";
import DescriptionLabel from "../atoms/label/DescriptionLabel";
import GreenCard from "../atoms/card/GreenCard";
import DefaultButton from "../atoms/button/DefaultButton";
import Link from "next/link";
import basicInfo from "@/data/basicInfo";
import Image from "next/image";

export default function ProfileMain({ data }) {
	return (
		<>
			<div className="flex justify-between">
				<div className="flex gap-10">
					<div className="bg-[--color-grayscale-100] w-[180px] h-[180px] rounded-full relative">
						<Image src={data.profile} layout="fill" alt="profile" />
					</div>
					<div className="flex flex-col gap-8 justify-center w-[260px] ">
						<div>
							<LargeLabel title={data.name} />
							<DefaultLabel title={data.job} />
						</div>

						<DescriptionLabel title={data.introduce} />
						<div className="flex gap-2">
							<GreenCard text={`${data.mentoring === "mentor" ? "멘토" : data.mentoring === "mentee" ? "멘티" : ""}`} />
							<GreenCard text={data.mbti} />
						</div>
					</div>
				</div>

				{/* DefaultButton 사용보다 Link 사용이 더 좋을 것 같아서 변경했습니다. */}
				<Link
					className="border-[1px] border-[--color-grayscale-200] rounded w-fit py-2 px-4 flex items-center "
					href="/signUp_001_Basic"
				>
					프로필 수정하기
				</Link>
			</div>
		</>
	);
}
