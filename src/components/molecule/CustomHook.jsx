import React, { useEffect } from 'react';

function MyComponent() {
  const handleClickOutside = (event) => {
    // 이벤트를 발생시킨 요소(target)가 컴포넌트 내부 요소인지 확인합니다.
    if (!event.target.closest('#myComponent')) {
      console.log('문서를 클릭했습니다.');
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트 리스너를 추가합니다.
    document.addEventListener('click', handleClickOutside);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div id="myComponent">
      <p>내 컴포넌트입니다. 문서 바깥을 클릭하면 콘솔에 로그가 출력됩니다.</p>
    </div>
  );
}

export default MyComponent;