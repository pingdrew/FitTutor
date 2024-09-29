import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentSection from './CommentSection';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/api/posts');
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <CommentSection postId={post._id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
