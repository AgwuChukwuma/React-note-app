import PropTypes from "prop-types";
import "./index.css";

const GraySidebar = ({ notes, onSelectNote }) => {
  return (
    <div className="gray-sidebar">
      <input className="search" type="text" placeholder="Search notes..." />
      <button>+ Add Note</button>
      {notes.map(note => {
        const previewContent = note.content.split(" ").slice(0, 14).join(" ");
        return(
                    <li key={note.id} onClick={() => onSelectNote(note)}>
          <strong>{note.title}</strong>
          <span className="note-preview">{previewContent}{note.content.split(" ").length > 14 ? '...' : ''}</span>
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
  })),
  onSelectNote: PropTypes.func.isRequired,
};

GraySidebar.defaultProps = {
  notes: [],
};

export default GraySidebar;
