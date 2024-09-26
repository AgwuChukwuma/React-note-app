import { useState } from 'react';
import BlueSidebar from './BlueSidebar';
import GraySidebar from './GraySidebar';
import Note from './Note';
import './index.css';

const App = () => {
  const [notes,setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleSelectedNote = (note) => {
    setSelectedNote(note);
  }
  return (
    <div className="app">
      <BlueSidebar />
      <GraySidebar notes={notes} onSelectNote={handleSelectedNote} />
      <Note  setNotes={setNotes} selectedNote={selectedNote} setSelectedNote={setSelectedNote}/>
    </div>
  );
};

export default App;