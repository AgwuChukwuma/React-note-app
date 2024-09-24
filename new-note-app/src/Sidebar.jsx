import React, { useState } from 'react';
import { List, ListItem, ListItemText, ListSubheader, TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';
import './index.css'; 

const Sidebar = ({ isBlue, notes }) => {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [colors, setColors] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [newTag, setNewTag] = useState('');
  const [newColor, setNewColor] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleAddTag = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const handleAddColor = () => {
    if (newColor.trim()) {
      setColors([...colors, newColor]);
      setNewColor('');
    }
  };

  return (
    <div className={`sidebar ${isBlue ? 'blue-sidebar' : ''}`}>
      <List>
        {isBlue ? (
          <>
            <ListSubheader>Categories</ListSubheader>
            <ListItem>
              <TextField 
                value={newCategory} 
                onChange={(e) => setNewCategory(e.target.value)} 
                placeholder="Add category" 
                variant="outlined" 
                size="small" 
              />
              <Button onClick={handleAddCategory}>Add</Button>
            </ListItem>
            {categories.map((category, index) => (
              <ListItem key={index}>
                <ListItemText primary={category} />
              </ListItem>
            ))}

            <ListSubheader>Tags</ListSubheader>
            <ListItem>
              <TextField 
                value={newTag} 
                onChange={(e) => setNewTag(e.target.value)} 
                placeholder="Add tag" 
                variant="outlined" 
                size="small" 
              />
              <Button onClick={handleAddTag}>Add</Button>
            </ListItem>
            {tags.map((tag, index) => (
              <ListItem key={index}>
                <ListItemText primary={tag} />
              </ListItem>
            ))}

            <ListSubheader>Colors</ListSubheader>
            <ListItem>
              <TextField 
                value={newColor} 
                onChange={(e) => setNewColor(e.target.value)} 
                placeholder="Add color" 
                variant="outlined" 
                size="small" 
              />
              <Button onClick={handleAddColor}>Add</Button>
            </ListItem>
            {colors.map((color, index) => (
              <ListItem key={index} style={{ backgroundColor: color }}>
                <ListItemText primary={color} />
              </ListItem>
            ))}

            <ListSubheader>Trash</ListSubheader>
            <ListItem button>
              <ListItemText primary="View Trash" />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem>
              <input type="text" placeholder="Search notes..." />
            </ListItem>
            <ListItem button>
              <button>Add Note</button>
            </ListItem>
            <ListItemText primary="Saved Notes" />
            {notes.map(note => (
              <ListItem key={note.id}>
                <ListItemText primary={note.title} />
              </ListItem>
            ))}
          </>
        )}
      </List>
    </div>
  );
};

Sidebar.propTypes = {
  isBlue: PropTypes.bool.isRequired,
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
};

Sidebar.defaultProps = {
  notes: [],
};

export default Sidebar;
