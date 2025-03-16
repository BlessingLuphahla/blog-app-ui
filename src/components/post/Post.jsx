import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ post }) {
  return (
    <article className="post">
      <Link to={`/post/${post?._id}`}>
        <div className="postImgWrapper">
          {post?.image ? (
            <img className="postImage" src={post.image} alt="s" />
          ) : (
            <img
              className="postImage"
              src="/images/image-not-available.jpg"
              alt="s"
            />
          )}
        </div>

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
        <p className="postText">{post?.description?.slice(0, 50)}...</p>
      </Link>
    </article>
  );
}
