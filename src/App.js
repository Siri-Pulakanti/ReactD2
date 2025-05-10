import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import InputContainer from "./InputContainer";
import Note from "./Note";
function App() {
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <Header />
      <InputContainer notes={notes} setNotes={setNotes} />

      <div className="note-container">
        {notes.map((note) => {
          return (
            <Note title={note.title} content={note.content} key={note.key} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
