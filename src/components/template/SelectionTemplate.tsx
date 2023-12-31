import React from "react";
import PageTitle from "../atoms/label/PageTitle";
import BannerNavLink from "../atoms/link/BannerNavLink";
import AnyButtonDarkGray from "../atoms/button/AnyButtonDarkGray";
import Link from "next/link";
// import SectionTitle from "../atoms/label/SectionTitle";

export default function SelectionTemplate() {
  return (
    <>
      <PageTitle
        title1=""
        PointTitle1="피움"
        title2="과 함께 새싹을 피워봐요!"
        PointTitle2=""
        border=""
      />
      <section className=" w-full max-w-[1200px] m-auto flex flex-col gap-[120px] ">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 ">
            <p className="font-semibold text-[24px] text-[--color-grayscale-600]">
              멤버로 시작하기
            </p>

            <div className="member-banner flex gap-6">
              <div className="flex flex-col gap-4">
                <Link href={"/project_list"}>
                  <BannerNavLink
                    text1={"둘러보기"}
                    text2={"프로젝트 찾기"}
                    href={"#"}
                  />
                </Link>
                <div>
                  <p>다양한 프로젝트를 둘러봅시다!</p>
                  <p>맘에드는 프로젝트를 찾아 신청해보세요.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link href={"/randomMatching"}>
                  <BannerNavLink
                    text1={"지원이 어렵다면"}
                    text2={"랜덤매칭"}
                    href={"#"}
                  />
                </Link>
                <div>
                  <p>첫 프로젝트라 지원이 어려우신가요?</p>
                  <p>랜덤매칭 서비스를 이용해보세요!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="leader-banner flex flex-col gap-4">
            <p className=" font-semibold text-[24px] text-[--color-grayscale-600]">
              리더로 시작하기
            </p>

            <Link href={"/create_project"}>
              <BannerNavLink
                text1={"아이디어가 있다면"}
                text2={"프로젝트 생성"}
                href={"#"}
              />
            </Link>
            <div>
              <p>반드시 팀 리더가 되지않아도 좋아요!</p>
              <p>좋은 아이디어가 있다면 자유롭게 제안해주세요.</p>
            </div>
          </div>
        </div>
        <Link href={"/"}>
          <AnyButtonDarkGray
            text="메인으로"
            addClassName="m-auto max-w-[400px] "
          />
        </Link>
      </section>
    </>
  );
}
