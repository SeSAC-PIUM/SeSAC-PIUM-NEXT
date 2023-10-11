import React from "react";
import ProfileMain from "../molecule/ProfileMain";
import TemplateCard from "../atoms/card/TemplateCard";
import ProfileTab from "../molecule/ProfileTab";

export default function ProfileTemplate() {
  return (
    <>
      <TemplateCard>
        <ProfileMain />

        <ProfileTab />
        {/* <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap" id="myTab">
            <li className="" role="profileTap">
              <a
                href="#"
                className="mr-8 inline-block py-4  border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="profile-tab"
              >
                프로필 설정
              </a>
            </li>
            <li className="" role="presentation">
              <a
                href="#"
                className="mr-8 inline-block py-4 text-black border-b-2  border-black rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300"
                aria-current="page"
                id="setting-tab"
              >
                프로젝트 관리
              </a>
            </li>
            <li className="" role="presentation">
              <a
                href="#"
                className=" inline-block py-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="reservation-tab"
              >
                공간예약
              </a>
            </li>
          </ul>
        </div> */}

        <div>프로필설정</div>
        <div>프로젝트 관리 링크 이동</div>
        <div>공간예약 링크 이동</div>
      </TemplateCard>
    </>
  );
}
