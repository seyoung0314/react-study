import React, { useState } from "react";
import CourseInput from "./components/CourseGoals/CourseInput";
import CourseList from "./components/CourseGoals/CourseList";
import "./App.css";

// 컴포넌트
function App() {

  //목표 데이터들의 묶음 배열
  const [goals, setGoals] = useState([]);

  //CourseInput에게 전달 할 함수
  const onAddGoal = (goal) => {
    setGoals([...goals, goal]);  
  };

  return (
    <>
      <div>
        <section id="goal-form">
          <CourseInput onAdd={onAddGoal}></CourseInput>
        </section>
        <section id="goals">
          <CourseList items = {goals}></CourseList>
        </section>
      </div>
    </>
  );
}

export default App;
