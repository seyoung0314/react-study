import React from "react";

// 컴포넌트
function App() {
  /*
     jsx : 리액트에서 사용하는 특수한 js문법, 태그를 그대로 쓰면 알아서 변환

    - 규칙 :
    1. return안에있는 태그는 반드시 하나의 태그로 묶여야 함.
    2. 빈 태그(닫는 태그가 없는)는 반드시 /> 로 마감
    3. 태그의 class속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
    4. 의미없는 부모는 <React.Fragment>로 감싸면 됨 (html에서 안뜸)
    5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨.
   */

  //(X)
  // const $h1 = `<h1>햄부기</h1>`;
  // const $h1 = `햄부기`;  //  => div태그로 생성됨

  //(O)
  // const $h1 = <h1>햄부기</h1>;
  // const $h1 = React.createElement("h1", null, "하이");

  // return $h1;

  const text = "React";
  return (
    // <React.Fragment>  = <>
    <React.Fragment>
      <header>
        <h1 id="h1">hello {text}</h1>
        <h2 className="h2">hello react</h2>
        <label htmlFor=""></label>
        <input type="text" id="input" />
      </header>
      <main>Main</main>
    </React.Fragment>
  );
}

export default App;
