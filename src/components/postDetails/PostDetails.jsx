import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../../context/Context";
import http from "../../utils/axios";
import "./postDetails.css";

export default function PostDetails() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  const { user } = useContext(Context);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await http.get(`/post/find/${postId}`);

      setPost(response.data);
    };
    fetchPost();
  }, []);

  return (
    <div className="postDetails">
      <div className="postDetailsWrapper">
        {post?.image ? (
          <img className="postDetailsImage" src={post.image} alt="ss" />
        ) : (
          <img
            className="postDetailsImage"
            src="/images/image-not-available.jpg"
            alt="ss"
          />
        )}
        <h1 className="postDetailsTitle">
          {post?.title}
          {user && (
            <span className="postDetailsEdit">
              <Link to={`/edit/${post?._id}`}>
                <i className="postDetailsIcon edit">Edit</i>
              </Link>
              <i className="postDetailsIcon delete">Delete</i>
            </span>
          )}
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
