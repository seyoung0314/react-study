import { useEffect, useState } from "react";
import "./App.css";
import MainHeader from "./components/SideEffect/MainHeader";
import Home from "./components/SideEffect/Home";
import Login from "./components/SideEffect/Login";

// 컴포넌트
const App = () => {
  // 로그인 상태 체크
  const [isLoggedIn, setIsLoggedIn] =
    useState();
    // 원래 백에서 로그인 토큰 관리하는거니까
    // 여기다가 억지로 fetch 날릴수잇음
    // localStorage.getItem("login-flag") === "1"

  // 로그인 상태 여부 파악 (localStorage에 토큰 유무 확인)
  const token = localStorage.getItem("login-flag");

  // 리액트는 기본적으로 상태값이 변경(다른값으로)되었을때만 감지하는데
  // 컴포넌트가 렌더링중일 때 setState 했을 때
  // 상태값이 변경가능성이 있다고 판단해서 리렌더링을 처리

  // if(token === "1"){
  //   setIsLoggedIn(true);
  // }

  // side effect(서버에서 데이터 가져오거나 상태가 변하는) 처리를 위한 함수
  useEffect(() => {
    console.log("useEffect 실행됨!");
    console.log("토큰 검사!!");
    // 이 컴포넌트가 렌더링될 때 localStorage에서 토큰을 꺼내서 이전에 로그인 했던 사람인지를 확인
    const token = localStorage.getItem("login-flag");
    if (token === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  // 기본적으로 useEffect의 첫번째 파라미터에 렌더링 후 실행할 함수를 전달
  // 두번째 파라미터에는 빈 배열을 전달하면 렌더링 이후 단 1번만 실행하는 함수로 작동
  const handleLogin = (email, password) => {
    console.log(isLoggedIn);
    //검증
    if (email === "aaa@aaa.com" && password === "1234567") {
      if (token !== 1) {
        localStorage.setItem("login-flag", "1");
        setIsLoggedIn(true);
      }
    } else {
      alert("실패");
    }
  };

    // 로그아웃을 위한 함수
    const handleLogout = () => { 
      localStorage.removeItem('login-flag');
      setIsLoggedIn(false);
    };

  return (
    <>
    <MainHeader onLogout={handleLogout} />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={handleLogin} />}
      </main>
    </>
  );
};

export default App;
