import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import image from "../../images/logo.jpg";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="top">
      <div className="topCenter">
        <img className="topImg" src={image} alt="" />
        <div className="mobileMenu">
          <div className="hamburger" onClick={() => setIsMenuOpen(true)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {isMenuOpen && (
            <div className="mobileMenuBar">
              <div className="menuClose" onClick={() => setIsMenuOpen(false)}>
                ×
              </div>
              <div className="mobileMenuItem">
                <Link onClick={() => setIsMenuOpen(false)} to={"/"}>
                  HOME
                </Link>
              </div>
              <div className="mobileMenuItem">
                <Link onClick={() => setIsMenuOpen(false)} to={"/about"}>
                  ABOUT
                </Link>
              </div>
              <div className="mobileMenuItem">
                <Link onClick={() => setIsMenuOpen(false)} to={"/services"}>
                  SERVICES
                </Link>
              </div>
              <div className="mobileMenuItem">
                <Link onClick={() => setIsMenuOpen(false)} to={"/blog"}>
                  BLOG
                </Link>
              </div>
              <div className="mobileMenuItem">
                <Link onClick={() => setIsMenuOpen(false)} to={"/gallery"}>
                  GALLERY
                </Link>
              </div>
              <div className="mobileMenuItem">
                <Link onClick={() => setIsMenuOpen(false)} to={"/contact"}>
                  CONTACT
                </Link>
              </div>
              {user && (
                <div className="mobileMenuItem">
                  <Link onClick={() => setIsMenuOpen(false)} to={"/create"}>
                    WRITE
                  </Link>
                </div>
              )}
              {user && (
                <div className="mobileMenuItem" onClick={handleLogout}>
                  LOGOUT
                </div>
              )}
            </div>
          )}
        </div>

        <ul className="topList">
          <li className="topListItem">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="topListItem">
            <Link to={"/about"}>ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to={"/services"}>SERVICES</Link>
          </li>
          <li className="topListItem">
            <Link to={"/blog"}>BLOG</Link>
          </li>
          <li className="topListItem">
            <Link to={"/gallery"}>GALLERY</Link>
          </li>
          <li className="topListItem">
            <Link to={"/contact"}>CONTACT</Link>
          </li>
          {user && (
            <li className="topListItem">
              <Link to={"/create"}>WRITE</Link>
            </li>
          )}
          {user && (
            <li className="topListItem" onClick={handleLogout}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link
            to={"/settings"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3px",
            }}
          >
            {user.profileImage ? (
              <img className="topImage" src={user.profileImage} alt="avatar" />
            ) : (
              <img
                className="topImage"
                src={"/images/profile.png"}
                alt="avatar"
              />
            )}
            <div className="topbarUsername">{user?.username || "Username"}</div>
          </Link>
        ) : (
          // <ul className="topList">
          //   <li className="topListItem">
          //     <Link to={"/login"}>Login</Link>
          //   </li>
          //   <li className="topListItem">
          //     <Link to={"/register"}>Register</Link>
          //   </li>
          // </ul>
          <></>
        )}
      </div>
    </div>
  );
}
