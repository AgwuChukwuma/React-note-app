import PropTypes from "prop-types";
import "./index.css";

const GraySidebar = ({ notes, onSelectNote }) => {
  const totalNotes = notes.length;

  return (
    <div className="gray-sidebar">
      <div className="search-input">
        <p className="total-notes">{totalNotes} Notes</p>
        <div className="search-container">
          <input type="text" placeholder="Search notes..." />
          <button className="search-button">
            <span className="material-icons">search</span>
          </button>
        </div>
        <button>+ Add Note</button>
      </div>
      {notes.map(note => {
        const previewContent = note.content.split(" ").slice(0, 14).join(" ");
        return (
          <li key={note.id} onClick={() => onSelectNote(note)}>
            <p className="timestamp">{note.timestamp}</p>
            <strong>{note.title}</strong>
            <span className="note-preview">
              {previewContent}{note.content.split(" ").length > 14 ? '...' : ''}
            </span>
          </li>
        );
      })}
    </div>
  );
};

GraySidebar.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  })),
  onSelectNote: PropTypes.func.isRequired,
};

GraySidebar.defaultProps = {
  notes: [],
};

export default GraySidebar;
