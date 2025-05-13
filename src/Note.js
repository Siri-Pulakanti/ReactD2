import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Note.css";

function Note({ title, content, uniqueId, notes, setNotes }) {
  function handleButtonClick() {
    console.log("The button is clicked,Title is", title, uniqueId, notes);
    const newNotes = notes.filter((note) => note.uniqueId != uniqueId);
    console.log(newNotes);
    setNotes(newNotes);
  }
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleButtonClick}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default Note;
