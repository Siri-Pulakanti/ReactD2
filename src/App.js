import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import InputContainer from "./InputContainer";
import Note from "./Note";
function App() {
  const [notes, setNotes] = useState([]);
  const [uniqueId, setUniqueId] = useState(notes.length);
  const [loaded, setloaded] = useState(false);

  useEffect(() => {
    let storedNotes = localStorage.getItem("notes");
    if (storedNotes === null) {
      setNotes([]);
      setloaded(true);
      return;
    }
    console.log("First useEffect");
    console.log(storedNotes);
    try {
      setNotes(JSON.parse(storedNotes));
    } catch (error) {
      console.log(error);
    }
    setloaded(true);
  }, []);
  useEffect(() => {
    loaded && localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes, loaded]);
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
