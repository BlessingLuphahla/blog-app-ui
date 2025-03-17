import "./header.css";
import image from "../../images/hero-main-pic.jpg";

export default function Header() {
  return (
    <div className="header">
      <img className="headerImage" src={image} alt="" />
      <div className="headerTitle">
        <h1>Welcome To</h1>
        <h2>It's Travels Blog </h2>
      </div>
    </div>
  );
}
