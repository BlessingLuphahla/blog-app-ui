import "./header.css";
import image from "../../images/hero-main-pic.jpg";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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

      <style jsx>{`
        .header {
          position: relative;
          text-align: center;
          color: white;
        }

        .headerImage {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .headerTitle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        h1, h2 {
          margin: 0;
          font-size: 2rem;
        }

        .blogButton {
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 1.2rem;
          color: white;
          background-color: black;
          border: 2px solid white;
          cursor: pointer;
          transition: 0.3s;
        }

        .blogButton:hover {
          background-color: white;
          color: black;
        }

        @media (max-width: 768px) {
          h1, h2 {
            font-size: 1.5rem;
          }
          .blogButton {
            font-size: 1rem;
            padding: 8px 16px;
          }
        }
      `}</style>
    </div>
  );
}
