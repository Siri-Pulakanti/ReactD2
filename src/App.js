import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

function App() {
  const [notes, setNotes] = useState([
    {
      key: 1,
      title: "Delegation",
      content:
        "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem",
    },
    {
      key: 2,
      title: "Loops",
      content:
        "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat.",
    },
  ]);
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
    <div className="App">
      <Header />
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
      <div className="note-container">
        {notes.map((note) => {
          return <Note title={note.title} content={note.content} />;
        })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
