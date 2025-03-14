import "./header.css";
import image from "../../images/hero-main-pic.jpg";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSmall">This is a blogging app</span>
        <span className="headerTitleLarge">WELCOME</span>
      </div>
      <img className="headerImage" src={image} alt="" />
    </div>
  );
}
