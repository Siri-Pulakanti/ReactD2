import React, { useState } from "react";

function InputContainer({ notes, setNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  function handleTitleInputChange(event) {
    setTitle(event.target.value);
    content == "" || event.target.value == ""
      ? setIsBtnDisabled(true)
      : setIsBtnDisabled(false);
  }
  function handleContentInputChange(value) {
    setContent(value);
    value == "" || title == ""
      ? setIsBtnDisabled(true)
      : setIsBtnDisabled(false);
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
        required
      />
      <textarea
        placeholder="content"
        onChange={(event) => {
          handleContentInputChange(event.target.value);
        }}
        value={content}
      />
      <button onClick={handleButtonClick} disabled={isBtnDisabled}>
        Add
      </button>
    </form>
  );
}
export default InputContainer;
