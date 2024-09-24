import React from 'react';
import Sidebar from './Sidebar';
import Note from './Note';
import './index.css';

const App = () => {
  const [notes, setNotes] = React.useState([]);

  return (
    <div className="app">
      <Sidebar isBlue={true} />
      <Sidebar isBlue={false} notes={notes} /> {/* Pass notes to the gray sidebar */}
      <Note setNotes={setNotes} />
    </div>
  );
};

export default App;
