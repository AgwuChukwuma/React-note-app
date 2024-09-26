import PropTypes from "prop-types"
import { useState, useEffect } from 'react';
import { db } from './config/firebase-config'; 
import { collection, addDoc, updateDoc, doc, onSnapshot } from 'firebase/firestore';
import './index.css';

const Note = ({setNotes, selectedNote, setSelectedNote}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editNoteId, setEditNoteId] = useState(null);
  const [loading, setLoading] = useState(false);

  const notesCollectionRef = collection(db, "Notes");

  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollectionRef, (snapshot) => {
      const notesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNotes(notesData);
    });

    return () => unsubscribe();
  }, [setNotes]);

  useEffect(() => {
    if (selectedNote){
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
      setEditNoteId(selectedNote.id)
    }
  },[selectedNote])

  useEffect(()=> {
    const saveNote = async () => {
      setLoading(true);
    if (editNoteId) {
      const noteDoc = doc(db, 'Notes', editNoteId);
      await updateDoc(noteDoc, { title, content });
    } else {
      await addDoc(notesCollectionRef, { title, content });
    }
    setLoading(false)
    setTitle("");
    setContent("");
    setEditNoteId(null);
    setSelectedNote(null);
  };

  const timer = setTimeout (() => {
    if (title || content) {
      saveNote();
    }
  }, 3000);

  return () => clearTimeout(timer);
  }, [title, content, editNoteId]);





  return (
    <div className="note-container">
      <div className="note-input">
        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
        />
        <textarea
          placeholder="Content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={loading}
        />
      </div>
      {loading && <div className='loading'> Loading...</div>}
    </div>
  );
};

Note.propTypes = {
  setNotes: PropTypes.func.isRequired,
  selectedNote: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  setSelectedNote: PropTypes.func.isRequired,
};

export default Note;
