import "./header.css";
import image from "../../images/hero-main-pic.webp";

export default function Header() {
  return (
    <div className="header">
      <img className="headerImage" src={image} alt="" />
    </div>
  );
}
