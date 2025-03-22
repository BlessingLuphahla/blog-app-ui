import "./header.css";
import image from "../../images/hero-main-pic.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <img className="headerImage" src={image} alt="Travel Blog Banner" />
      <div className="headerTitle">
        <h1>Welcome To</h1>
        <h2>It's Travels Blog</h2>
        <Link to="/blog">
          <button className="blogButton">My Blog</button>
        </Link>
      </div>
    </div>
  );
}
