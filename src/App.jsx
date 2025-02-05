import React from "react";
import ExpenseList from "./components/expenses/ExpenseList.jsx";
import NewExpense from "./components/new-expense/NewExpense";

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
  // return (
  //   // <React.Fragment>  = <>
  //   // <React.Fragment>
  //   //   <header>
  //   //     <h1 id="h1">hello {text}</h1>
  //   //     <h2 className="h2">hello react</h2>
  //   //     <label htmlFor=""></label>
  //   //     <input type="text" id="input" />
  //   //   </header>
  //   //   <main>Main</main>
  //   // </React.Fragment>

  //   <>
  //   <Hello />
  //   <Bye></Bye>
  //   </>
  // );

  const expenses = [
  {
    "title": "치킨",
    "price": 16000,
    "date": new Date(2022,1,1),
  },
  {
    "title": "햄버거",
    "price": 8000,
    "date": new Date(2023,1,3),
  },
  {
    "title": "아이스크림",
    "price": 1300,
    "date": new Date(2024,1,3),
  },
  ];

  // 상향식 데이터 전달을 위해 하위컴포넌트에게 함수 하나를 내려줘야 함.
  const onAddExpense = (newUserData) => {
    console.log('상향식데이터 전달용 함수 호출!');
    // console.log(newUserData);
    expenses.push(newUserData);
    console.log(expenses);
    
  };

  return (
    <>
      <NewExpense onSave={onAddExpense} />
      <ExpenseList expenses={expenses} />
    </>
  );
}

export default App;
