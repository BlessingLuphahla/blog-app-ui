import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  const publicFolder = "";

  return (
    <article className="post">
      <Link to={`/post/${post?._id}`}>
        {post?.image ? (
          <img className="postImage" src={post.image} alt="s" />
        ) : (
          <img
            className="postImage"
            src="/images/image-not-available.jpg"
            alt="s"
          />
        )}
        <div className="postInfo">
          <div className="postCategories">
            {post?.categories.map((category, index) => (
              // Category should be as an object
              <span className="postCategory" key={index}>
                {category}
              </span>
            ))}
          </div>
          <h2 className="postTitle">{post?.title}</h2>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postText">{post?.description}</p>
      </Link>
    </article>
  );
}
