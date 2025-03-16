import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import http from "../../utils/axios";
import { useSearchParams } from "react-router-dom";
import Post from "../../components/post/Post";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchPosts = async () => {
      let response;

      // if (searchParams.get("author")) {
      //   response = await http.get(`/post`, {
      //     params: {
      //       author: searchParams.get("author"),
      //     },
      //   });
      // } else if (searchParams.get("category")) {
      //   response = await http.get(`/post`, {
      //     params: {
      //       category: searchParams.get("category"),
      //     },
      //   });
      // } else {
      //   response = await http.get(`/post`);
      // }

      response = await http.get(`/post`);
      setPosts(response.data);
    };
    fetchPosts();
  }, [searchParams]);

  return (
    <>
      <Header />
      <div className="home">
        <div className="homePosts">
          <h2 className="homePostsTitle">Top Blogs</h2>
          <div className="homePostsPosts">
            {posts.length ? (
              posts
                .slice(0, 4)
                .map((post, index) => <Post key={index} post={post} />)
            ) : (
              <div className="postNotFound">
                <h3 className="postNotFoundTitle">
                  There are no blog posts yet...
                </h3>
              </div>
            )}
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}
