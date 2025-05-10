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
  function handleButtonClick(event) {
    event.preventDefault();
    let newNote = { title: title, content: content, key: notes.length + 1 };
    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  }
  return (
    <form>
      <input
        placeholder="title"
        onChange={handleTitleInputChange}
        value={title}
      />
      <textarea
        placeholder="content"
        onChange={(event) => {
          handleContentInputChange(event.target.value);
        }}
        value={content}
      />
      <button onClick={handleButtonClick}>Add</button>
    </form>
  );
}
export default InputContainer;
