import React, {useState} from "react";
import styles from './CourseItem.module.css';
import Modal from "../ui/Modal";

const CourseItem = ({ item, deleteGoal }) => {

  const { 'goal-item': goalItem } = styles;

  const { id, enteredText } = item;

  const [isModalOpen, setIsModalOpen] = useState(false);

  // li태그에 클릭 이벤트
  // app.jsx의 goals 배열에서 클릭한 아이템을 지움

  // 모달 열기
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 삭제 확인
  const handleConfirmDelete = () => {
    deleteGoal(id);
    setIsModalOpen(false);
  };

  let modal;
  if(isModalOpen){
    modal= <Modal onConfirm={handleConfirmDelete} onCancel={handleCloseModal} />;
  }
  return (
    <>
    <li
      className={goalItem}
      onClick={handleOpenModal}>
      {enteredText}
    </li>
    {modal}
    </>
  );
};

export default CourseItem;
