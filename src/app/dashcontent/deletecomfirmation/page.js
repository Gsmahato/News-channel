import React from "react";
import styles from "../../styles/newStyles.module.css";

export default function DeleteConfirmationDialog({ onCancel, onConfirm }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p>Are you sure you want to delete this news article?</p>
        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.confirmButton} onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}