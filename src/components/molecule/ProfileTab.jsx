import { useState } from "react";
import styled from "styled-components";

// Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현.

const TabMenu = styled.ul`
  color: var(--color-grayscale-400);
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin: 24px 0px;
  /* padding-bottom: 16px; */
  border-bottom: 1px solid var(--color-grayscale-200);

  .submenu {
    // 기본 Tabmenu 에 대한 CSS를 구현
    display: flex;
    margin-right: 40px;
    font-size: 16px;
    padding-bottom: 16px;
    transition: 0.3s;
    border-radius: 10px 10px 0px 0px;
  }

  .focused {
    //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: rgb(255, 255, 255);
    color: var(--color-grayscale-600);
    padding-bottom: 16px;
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
import ProfileTabProfile from "../organism/ProfileTabProfile";
import ProfileTabProject from "../organism/ProfileTabProject";

export default function ProfileTab() {
  const [currentTab, clickTab] = useState(0);

  const menuArr = [
    { name: "프로필 설정", content: <ProfileTabProfile /> },
    { name: "프로젝트 관리", content: <ProfileTabProject /> },
    { name: "공간예약", content: "공간예약" },
  ];

  const selectMenuHandler = (index) => {
    clickTab(index);
  };
  return (
    <>
      <div>
        <TabMenu>
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
