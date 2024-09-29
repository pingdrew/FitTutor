import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState('');
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(`/api/comments/${postId}`);
      setComments(response.data);
    };

    fetchComments();
  }, [postId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/comments', { postId, text: newComment });
    setNewComment('');
    // Refresh comments
    const response = await axios.get(`/api/comments/${postId}`);
    setComments(response.data);
  };

  return (
    <div>
      <h3>Comments</h3>
      <form onSubmit={handleCommentSubmit}>
        <input 
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button type="submit">Comment</button>
      </form>
      <ul>
        {comments.map(comment => (
          <li key={comment._id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;
