import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../../utils/axios";
import "./sidebar.css";
import image from "../../images/about.jpg";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await http.get("/category");

      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={image} alt="" />
        <p>
          Welcome to my blog! I’m excited to have you here. This space is
          dedicated to sharing insights, experiences, and ideas on topics that
          matter to me, ranging from web development and technology to design,
          business, and beyond. I believe in the power of innovation, continuous
          learning, and creating meaningful connections. My goal is to provide
          valuable content that educates, inspires, and sparks conversations.
          Whether you're here to explore the latest trends, get practical tips,
          or simply enjoy thought-provoking posts, I hope you'll find something
          that resonates with you. Feel free to browse through my articles,
          leave your comments, and reach out if you'd like to connect! I'm
          always eager to engage with like-minded individuals and hear different
          perspectives.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {categories.map((category, index) => (
            <li className="sidebarListItem" key={index}>
              <Link to={`/?category=${category?.name}`}>{category?.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </aside>
  );
}
