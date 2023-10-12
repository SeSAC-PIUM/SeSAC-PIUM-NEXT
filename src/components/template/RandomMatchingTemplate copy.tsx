import React from "react";
import PageTitle from "../atoms/label/PageTitle";
import AnyButtonGreen from "../atoms/button/AnyButtonGreen";
import Image from "next/image";
import randomMatching from "../../img/randomMatching.svg";
export default function RandomMatchingTemplate() {
  const className = "pb-2";

  function showAlert() {
    Swal.fire({
      title: '[강동/퍼블리싱] 직무가 맞으신가요?',
      text: '일치하지 않을시 마이페이지에서 수정가능합니다.',
      icon: 'warning',
      customClass: {
        // 여기서 css 클래스를 부여할 수 있습니다!
        title: 'modal-title', // 팝업창의 title에 대한 클래스 부여
        popup: 'modal-container', // 팝업창 자체에 대한 클래스 부여
      },
  
      showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
      confirmButtonColor: '#2da96e', // confrim 버튼 색깔 지정
      cancelButtonColor: '#c6c6d0', // cancel 버튼 색깔 지정
      confirmButtonText: '신청하기', // confirm 버튼 텍스트 지정
      cancelButtonText: '창 닫기', // cancel 버튼 텍스트 지정
  
      // reverseButtons: true, // 버튼 순서 거꾸로
    }).then((result) => {
      // 만약 Promise리턴을 받으면,
      if (result.isConfirmed) {
        // 만약 모달창에서 confirm 버튼을 눌렀다면
  
        Swal.fire({
          title: '신청이 완료되었습니다.',
          text: '3일 내에 카카오톡 알림으로 알려드려요.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#2da96e',
        });
        // Swal.fire('신청이 완료되었습니다.', '잘하셨습니다~!', 'success');
      }
    });
  }
  


  return (
    <>
      <section className=" max-w-[640px] w-full m-auto ">
        <PageTitle
          title1="랜덤매칭"
          title2=""
          PointTitle1=""
          PointTitle2=""
          border=""
        />
        <div className="pt-[40px] flex flex-col gap-12">
          <Image src={randomMatching} alt="loginLogo" className="w-full " />
          <div>
            <p className={className}>
              랜덤매칭은 팀 선택이 어려운 분들을 위해 PIUM에서 랜덤으로 팀을
              매칭해주는 서비스입니다.
            </p>
            <p className={className}>
              3일 내로 매칭이 성사되면 카카오톡 알림으로 알려드립니다!{" "}
            </p>
            <p> 가입시 입력하신 캠퍼스/직무 기준으로 매칭이 신청됩니다. </p>
            <p className={className}>
              추가정보를 꼼꼼히 입력할수록 빠르게 매칭 가능합니다.
            </p>
            <p className={className}>
              모든 정보는 우측상단 프로필 아이콘을 클릭해 마이페이지에서
              수정가능합니다.
            </p>
          </div>

<button onclick="showAlert()">

          <AnyButtonGreen
            text="랜덤매칭 신청"
            addClassName="m-auto max-w-[400px] "
            />
            </button>
        </div>
      </section>
    </>
  );
}
