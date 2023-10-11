import { useState } from "react";
import styled from "styled-components";

// Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현.

const TabMenu = styled.ul`
  color: var(--color-grayscale-400);
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin-bottom: 24px;
  margin: 16px 0px;

  border-bottom: 1px solid var(--color-grayscale-200);

  .submenu {
    // 기본 Tabmenu 에 대한 CSS를 구현
    display: flex;
    margin-right: 40px;
    font-size: 16px;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
  }

  .focused {
    //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: rgb(255, 255, 255);
    color: var(--color-grayscale-600);

    border-bottom: 2px solid var(--color-grayscale-600);
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  /* text-align: center; */
`;

import React from "react";
import ProfileTabContent from "../organism/ProfileTabContent";

export default function ProfileTab() {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: "프로필 설정", content: <ProfileTabContent /> },
    { name: "프로젝트 관리", content: "프로젝트 관리" },
    { name: "공간예약", content: "공간예약" },
  ];

  const selectMenuHandler = (index) => {
    clickTab(index);
  };
  return (
    <>
      <div>
        <TabMenu>
          {/* <ul className="flex gap-[40px] text-sm font-medium  text-gray-500 border-b border-gray-200"> */}
          {menuArr.map((el, index) => (
            <React.Fragment key={menuArr.name}>
              <li
                className={index === currentTab ? "submenu focused" : "submenu"}
                onClick={() => selectMenuHandler(index)}
              >
                {el.name}
              </li>
            </React.Fragment>
          ))}
          {/* </ul> */}
        </TabMenu>
        <Desc>
          <p>{menuArr[currentTab].content}</p>
        </Desc>
      </div>
    </>
  );
}
