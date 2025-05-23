import { faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Note.css";

function Note({ title, content, uniqueId, setNotes, isCompleted }) {
  function handleButtonClick() {
    //setCount((prev)=>prev+1)
    setNotes((prev) => {
      let updatedNoteArray = prev.filter((note) => note.uniqueId !== uniqueId);

      return updatedNoteArray;
    });
  }

  function handleToggleStatus() {
    setNotes((prev) => {
      const updatedNotes = prev.map((item) =>
        item.uniqueId === uniqueId
          ? { ...item, isCompleted: !item.isCompleted } // ← use item.isCompleted here
          : item
      );

      return updatedNotes;
    });
  }

  return (
    <div className={`note ${isCompleted && "completed"}`}>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleButtonClick} className="trash-btn">
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <button onClick={handleToggleStatus} className="x-btn">
        <FontAwesomeIcon icon={!isCompleted ? faCheck : faXmark} />
      </button>
    </div>
  );
}

export default Note;
