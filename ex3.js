'use client'
import React from 'react';

const BlogPost = ({ title, content }) => (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
  export default BlogPost;