import React, { useState } from "react";
import CourseInput from "./components/CourseGoals/CourseInput";
import CourseList from "./components/CourseGoals/CourseList";
import "./App.css";

// 컴포넌트
function App() {
  return (
    <>
      <div>
        <section id="goal-form">
          <CourseInput></CourseInput>
        </section>
        <section id="goals">
          <CourseList></CourseList>
        </section>
      </div>
    </>
  );
}

export default App;
