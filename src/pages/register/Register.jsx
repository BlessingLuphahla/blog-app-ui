import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../../utils/axios";
import "./register.css";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);

    try {
      const response = await http.post("/auth/register", {
        username: name,
        email,
        password,
      });

      if (response.data) {
        setName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h1 className="register-title">Create an Account</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="register-button" type="submit">
            Register
          </button>
        </form>
        <p className="register-login-text">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
        {error && <span className="error-message">Something went wrong...</span>}
      </div>
    </div>
  );
}
