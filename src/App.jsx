import { useEffect, useState } from "react";
import "./App.css";
import MainHeader from "./components/SideEffect/MainHeader";
import Home from "./components/SideEffect/Home";
import Login from "./components/SideEffect/Login";

// 컴포넌트
const App = () => {
  // 로그인 상태 체크
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  
  // 로그인 상태 여부 파악 (localStorage에 토큰 유무 확인)
  const token = localStorage.getItem('login-flag');


  // 리액트는 기본적으로 상태값이 변경(다른값으로)되었을때만 감지하는데
  // 컴포넌트가 렌더링중일 때 setState 했을 때 
  // 상태값이 변경가능성이 있다고 판단해서 리렌더링을 처리
  // if(token !== "1"){
  //   setIsLoggedIn(false);
  // }
  
  const handleLogin = (email, password) => {
    console.log(isLoggedIn);
    //검증
    if (email === "aaa@aaa.com" && password === "1234567") {
      if(token !== "1"){
        localStorage.setItem("login-flag", "1");
      }
      setIsLoggedIn(true);
    } else {
      alert("실패");
    }
  };

  return (
    <>
      <MainHeader />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={handleLogin} />}
      </main>
    </>
  );
};

export default App;
