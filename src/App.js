import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import InputContainer from "./InputContainer";
import Note from "./Note";
function App() {
  const [notes, setNotes] = useState(() => {
    let storedNotes = localStorage.getItem("notes");
    console.log("First useEffect");
    console.log(storedNotes);
    try {
      return JSON.parse(storedNotes);
    } catch (error) {
      console.log(error);
      return [];
    }
  });
  const [uniqueId, setUniqueId] = useState(notes.length);
  // setTimeout(
  //   () => { },3000
  // )
  // useEffect(() => {
  //   // localStorage.setItem("notes", JSON.stringify(notes));
  //   let storedNotes = localStorage.getItem("notes");
  //   console.log("First useEffect");
  //   console.log(storedNotes);
  //   try {
  //     setNotes(JSON.parse(storedNotes));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  useEffect(() => {
    console.log("Second useEffect");

    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
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
