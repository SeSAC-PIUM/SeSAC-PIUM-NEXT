import BannerNavLink from "../link/BannerNavLink";

export default function MainMakingProjectButton() {
  return (
    <>
      <BannerNavLink
        text1="아이디가 있다면"
        text2="프로젝트 생성✨"
        href="/create_project"
      />
    </>
  );
}
