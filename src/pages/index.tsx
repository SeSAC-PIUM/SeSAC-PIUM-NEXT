import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // ctrl + i - tailwind 자동완성 단축키
  return <main className="border">메인 작업 페이지 입니다.</main>;
}
