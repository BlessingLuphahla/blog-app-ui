import Post from "../post/Post";
import "./posts.css";

export default function Posts(props) {
  return (
    <div className="posts">
      {props.posts.length ? (
        props.posts.map((post, index) => <Post key={index} post={post} />)
      ) : (
        <div className="postNotFound">
          <h3 className="postNotFoundTitle">There are no blog posts yet...</h3>
        </div>
      )}
    </div>
  );
}
