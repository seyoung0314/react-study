import React from "react";
import "./CourseList.css";
import CourseItem from "./CourseItem";

const CourseList = ({items,deleteGoal}) => {
  return (
    <ul className="goal-list">
      {
        items.map(item=><CourseItem key={item.id} item={item} deleteGoal={deleteGoal}/>)
      }
    </ul>
  );
};

export default CourseList;
