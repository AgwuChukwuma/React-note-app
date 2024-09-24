import { useState, useEffect } from 'react';
import { db } from './config/firebase-config'; 
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import PropTypes from 'prop-types';
import './index.css';

const Note = ({ setNotes }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const notesCollectionRef = collection(db, 'Notes');

  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollectionRef, (snapshot) => {
      const notesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNotes(notesData);
    });

    return () => unsubscribe();
  }, [setNotes]);

  const handleAddOrUpdate = async () => {
    try {
      if (editIndex !== null) {
        const noteDoc = doc(db, 'Notes', notes[editIndex].id);
        await updateDoc(noteDoc, { title, content });
        setEditIndex(null);
      } else {
        await addDoc(notesCollectionRef, { title, content });
      }
      setTitle('');
      setContent('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setTitle(notes[index].title);
    setContent(notes[index].content);
  };

  const handleDelete = async (index) => {
    try {
      const noteDoc = doc(db, 'Notes', notes[index].id);
      await deleteDoc(noteDoc);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="note-container">
      <h1>Notes</h1>
      <div className="note-input">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={handleAddOrUpdate}>
          {editIndex !== null ? 'Update Note' : 'Add Note'}
        </button>
      </div>
    </div>
  );
};

Note.propTypes = {
  setNotes: PropTypes.func.isRequired,
};

export default Note;
