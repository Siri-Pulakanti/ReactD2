import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import InputContainer from "./InputContainer";
import Note from "./Note";
function App() {
  const [notes, setNotes] = useState([
    {
      title: "WakeUp",
      content: "Make your bed",
      uniqueId: 0,
      isCompleted: true,
    },
    {
      title: "Stretch Your Body",
      content: "Go for a walk",
      uniqueId: 1,
      isCompleted: false,
    },
  ]);
  const [uniqueId, setUniqueId] = useState(notes.length);

  return (
    <div className="App">
      <Header />
      <InputContainer
        setNotes={setNotes}
        uniqueId={uniqueId}
        setUniqueId={setUniqueId}
        notes={notes}
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
