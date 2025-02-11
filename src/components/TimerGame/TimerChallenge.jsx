import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal";

/*
  타이머를 전역변수로 설정하면 게임을 동시실행 시 
  컴포넌트들이 타이머를 공유하게 되어 중첩되서 덮어쓰기 됨
*/
// 타이머 id 저장
// let timer;

const TimerChallenge = ({ title, targetTime },ref) => {
  // 타이머 id를 컴포넌트별로 각각 관리
  // useRef - 리렌더링이 되어도 값 유지
  const timer = useRef();

  // 모달 제어 ref
  const dialogRef = useRef();

  // 타이머가 시작되었는지를 확인하는 상태값
  const [timerStarted, setTimerStarted] = useState(false);

  // 시간이 다 지났는지 여부
  const [timerExpired, setTimerExpired] = useState(false);

  // start 이벤트
  const handleStart = (e) => {
    setTimerStarted(true);

    /*
      setTimeout실행시 타이머의 id(aaa)가 생성된다.
      타이머 실행시 setTimerExpired가 실행됨.

      상태변수는 실행시 컴포넌트를 리렌더링함.
      리렌더링할 때 기존에 저장한 timer id(aaa)를 없앤다.

      따라서 제대로 clear를 수행하지 못함
    */

    // 실제 시간을 실행
    timer.current = setTimeout(() => {
      // 패배시점
      console.log(`${targetTime} 초가 지남!`);
      setTimerExpired(true);
      dialogRef.current.showModal();

    }, targetTime * 1000);

    console.log(`start timer: ${timer.current}`);
  };

  // stop 이벤트
  const handleStop = (e) => {
    console.log("타이머를 중지함! stop timer : ", timer.current);
    clearTimeout(timer.current); // 타이머 해제
    // 승리시점
    dialogRef.current.showModal();
  };

  return (
    <>
    {/* ref는 태그에만 붙이기가능, 컴포넌트에는 불가능 */}
      <ResultModal ref={dialogRef} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className="">
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
