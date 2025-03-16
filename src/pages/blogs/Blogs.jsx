import React, { useEffect, useState } from "react";
import "./blogs.css";
import http from "../../utils/axios";
import Post from "../../components/post/Post";

function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await http.get(`/post`);
      setPosts(response.data);
    };

    fetchPosts();
  },[]);

  return (
    <div className="blogs">
      {posts.length ? (
        posts.map((post, index) => <Post key={index} post={post} />)
      ) : (
        <div className="postNotFound">
          <h3 className="postNotFoundTitle">There are no blog posts yet...</h3>
        </div>
      )}
    </div>
  );
}

export default Blogs;
