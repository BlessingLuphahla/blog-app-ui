import React, { useEffect, useState } from "react";
import "./blog.css";
import http from "../../utils/axios";
import Post from "../../components/post/Post";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await http.get(`/post`);
      setPosts(response.data);
    };

    fetchPosts();
  },[]);

  return (
    <div className="blog">
      {posts.length ? (
        posts.map((post, index) => <Post key={index} post={post} />)
      ) : (
        <div className="blogsPostNotFound">
          <h3 className="blogsPostNotFoundTitle">There are no blog posts yet...</h3>
        </div>
      )}
    </div>
  );
}

export default Blog;
