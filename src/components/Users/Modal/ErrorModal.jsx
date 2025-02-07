import React from 'react';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import styles from './ErrorModal.module.scss';

const ErrorModal = ({ title, message, closeModal }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={closeModal}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={closeModal}>OK</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
