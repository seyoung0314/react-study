import React from "react";
import styles from "./CourseList.module.css";
import CourseItem from "./CourseItem";

const CourseList = ({items,deleteGoal}) => {

    const { 'goal-list': goalList } = styles;

  return (
    <ul className={goalList}>
      {
        items.map(item=><CourseItem key={item.id} item={item} deleteGoal={deleteGoal}/>)
      }
    </ul>
  );
};

export default CourseList;
