import React, { useEffect, useState } from 'react';

import Card from "../ui/Card";
import styles from "./Login.module.css";
import Button from "../ui/Button";

const Login = ({onLogin}) => {
  //사용자가 입력한 이메일 상태변수
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  //검증용 상태변수
  // 초기값을 true로 세팅해놓으면 초기화면에서 검증이 뚫리기때문에
  // falsy한 값으로 설정해두고(null,'',...) 명확히 false만 클래스 붙도록
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();

  // 로그인버튼 상태변수
  const [formIsValid , setFormIsValid] = useState(false);

  const handleEmail = (e) => {
    setEnteredEmail(e.target.value);

    // setFormIsValid(
    //   enteredEmail.includes('@') && e.target.value.trim().length > 6
    // );
  };

  const handlePassword = (e) => {
    setEnteredPassword(e.target.value);

    // setFormIsValid(
    //   enteredEmail.includes('@') && e.target.value.trim().length > 6
    // );
  };

  // 이메일 검증
  const vaildateEmail = (e) => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  // 비밀번호 검증
  const vaildatePassword = (e) => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  //로그인 수행
  const handleSubmit = e =>{
    e.preventDefault();
    onLogin(enteredEmail,enteredPassword);
  }

  useEffect(() => {
    // 디바운싱 1초 적용
    const timer = setTimeout(() => {
      console.log('useEffect call in Login.js');
      setFormIsVaild(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 1000);
    // cleanup 함수 - 컴포넌트가 업데이트 되기 직전에 실행
    return () => {
      // console.log('clean up!! - ', enteredEmail);
      clearTimeout(timer);
    };
  }, [enteredEmail, enteredPassword]);

  return (
    <Card className={styles.login}>
      <form onSubmit={handleSubmit}>
        <div 
          className={`${styles.control} ${
            emailIsValid === false ? styles.invalid : ''
          }`}>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onInput={handleEmail}
            onBlur={vaildateEmail}
          />
        </div>
        <div 
                  className={`${styles.control} ${
                    passwordIsValid === false ? styles.invalid : ''
                  }`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onInput={handlePassword}
            onBlur={vaildatePassword}
          />
        </div>
        <div className={styles.actions}>
          <Button 
          type="submit" 
          className={styles.btn}
          disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
