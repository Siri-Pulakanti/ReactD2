import React, { useState } from "react";

function InputContainer({ setNotes, uniqueId, setUniqueId, notes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  function handleButtonDisability() {
    title.trim() == "" || content.trim() == ""
      ? setIsBtnDisabled(true)
      : setIsBtnDisabled(false);
  }

  function handleTitleInputChange(value) {
    setTitle(value);
    handleButtonDisability();
  }
  function handleContentInputChange(value) {
    setContent(value);
    handleButtonDisability();
  }
  function handleButtonClick(event) {
    event.preventDefault();
    let newNote = {
      title: title,
      content: content,
      uniqueId: uniqueId,
      isCompleted: false,
    };
    // setNotes([...notes, newNote]);This can be written as follows
    setNotes((prev) => [...prev, newNote]);

    setTitle("");
    setContent("");
    setUniqueId(uniqueId + 1);
    setIsBtnDisabled(true);
  }
  return (
    <form>
      <input
        placeholder="title"
        // onChange={handleTitleInputChange}
        onChange={(event) => {
          handleTitleInputChange(event.target.value);
        }}
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
