import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import InputContainer from "./InputContainer";
import Note from "./Note";
function App() {
  const [notes, setNotes] = useState([]);
  const [uniqueId, setUniqueId] = useState(0);

  return (
    <div className="App">
      <Header />
      <InputContainer
        setNotes={setNotes}
        uniqueId={uniqueId}
        setUniqueId={setUniqueId}
      />

      <div className="note-container">
        {notes.map((note) => {
          return (
            <Note
              title={note.title}
              content={note.content}
              key={note.uniqueId}
              uniqueId={note.uniqueId}
              setNotes={setNotes}
              isCompleted={note.isCompleted}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
