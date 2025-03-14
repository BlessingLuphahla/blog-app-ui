import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import http from "../../utils/axios";
import "./postDetails.css";

export default function PostDetails() {
  const publicFolder =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/images/"
      : "https://blog-app-api-7q63.onrender.com/images/";

  const [post, setPost] = useState({});
  const { postId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await http.get(`/post/${postId}`);

      setPost(response.data);
    };
    fetchPost();
  }, []);

  return (
    <div className="postDetails">
      <div className="postDetailsWrapper">
        {post?.image ? (
          <img
            className="postDetailsImage"
            src={publicFolder + post.image}
            alt="image"
          />
        ) : (
          <img
            className="postDetailsImage"
            src="/images/image-not-available.jpg"
            alt="image"
          />
        )}
        <h1 className="postDetailsTitle">
          {post?.title}
          {
            <span className="postDetailsEdit">
              <Link to={`/edit/${post?._id}`}>
                <i className="postDetailsIcon edit fa-solid fa-pen-to-square"></i>
              </Link>
              <i className="postDetailsIcon delete fa-solid fa-trash-can"></i>
            </span>
          }
        </h1>
        <div className="postDetailsInfo">
          <span className="postDetailsAuthor">
            Author:
            <Link to={`/?author=${post?.author}`}>
              <b>{post?.author}</b>
            </Link>
          </span>
          <span className="postDetailsDate">
            {new Date(post?.createdAt)
              .toUTCString()
              .split(" ")
              .slice(0, 4)
              .join(" ")}
          </span>
        </div>
        <p className="postDetailsText">{post?.description}</p>
      </div>
    </div>
  );
}
