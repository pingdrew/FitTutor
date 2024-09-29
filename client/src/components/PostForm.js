import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [hashtags, setHashtags] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/posts', { title, description, category, hashtags: hashtags.split(',') });
    // Reset form
    setTitle('');
    setDescription('');
    setCategory('');
    setHashtags('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input 
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category (Workout, Exercise, Meal, Ingredient)"
        required
      />
      <input 
        value={hashtags}
        onChange={(e) => setHashtags(e.target.value)}
        placeholder="Hashtags (comma separated)"
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
