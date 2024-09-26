import { useState } from "react";
import "./index.css";

const BlueSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [colors, setColors] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [newTag, setNewTag] = useState('');
  const [newColor, setNewColor] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const handleAddTag = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleAddColor = () => {
    if (newColor.trim()) {
      setColors([...colors, newColor]);
      setNewColor("");
    }
  };

  return (
    <div className="sidebar blue-sidebar">
      <li>Categories</li>
      <li>
        <input
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Add category"
        />
        <p onClick={handleAddCategory}>+</p>
      </li>
      {categories.map((category, index) => (
        <li key={index}>{category}</li>
      ))}
      
      <li>Tags</li>
      <li>
        <input
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder="Add tag"
        />
        <p onClick={handleAddTag}>+</p>
      </li>
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}

      <li>Colors</li>
      <li>
        <input
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
          placeholder="Add color"
        />
        <p onClick={handleAddColor}>+</p>
      </li>
      {colors.map((color, index) => (
        <li key={index}>{color}</li>
      ))}

      <li>Trash</li>
      <li>
        <p>View Trash</p>
      </li>
    </div>
  );
};

export default BlueSidebar;
