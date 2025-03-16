import "./header.css";
import image from "../../images/hero-main-pic.webp";

export default function Header() {
  return (
    <div className="header">
      <img className="headerImage" src={image} alt="" />
      <h2 className="headerTitle">Its Travel Blog</h2>
    </div>
  );
}
