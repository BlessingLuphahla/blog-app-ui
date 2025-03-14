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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          veniam, pariatur quos similique ex dolorum quae perferendis quas
          optio! Aut!
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
