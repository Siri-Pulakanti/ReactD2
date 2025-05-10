import React, { useState } from "react";

function InputContainer({ notes, setNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function handleTitleInputChange(event) {
    setTitle(event.target.value);
  }
  function handleContentInputChange(value) {
    setContent(value);
  }
  function handleButtonClick() {
    let newNote = { title: title, content: content, key: notes.length + 1 };
    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  }
  return (
    <>
      <input
        placeholder="title"
        onChange={handleTitleInputChange}
        value={title}
      />
      <input
        placeholder="content"
        onChange={(event) => {
          handleContentInputChange(event.target.value);
        }}
        value={content}
      />
      <button onClick={handleButtonClick}>Add New Note</button>
    </>
  );
}
export default InputContainer;
