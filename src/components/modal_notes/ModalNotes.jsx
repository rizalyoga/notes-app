import React from "react";
import { RiCloseLine } from "react-icons/ri";
import styles from "./ModalNotes.module.css";

const ModalNotes = ({ selectedNote, setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={setIsOpen} />
      <div className={styles.centered}>
        <div className={styles.modalNotes}>
          <div className={styles.modalHeader}>
            <h5 className={styles.headingContent}>{selectedNote[0].title}</h5>
          </div>
          <button className={styles.closeBtn} onClick={setIsOpen}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <p>{selectedNote[0].body}</p>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.modalButton} onClick={setIsOpen}>
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNotes;
