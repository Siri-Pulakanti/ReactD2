import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Note.css";

function Note({ title, content, uniqueId, setNotes }) {
  function handleButtonClick() {
    //setCount((prev)=>prev+1)
    setNotes((prev) => prev.filter((note) => note.uniqueId != uniqueId));
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
