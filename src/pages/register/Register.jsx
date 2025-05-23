import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import http from "../../utils/axios";
import "./register.css";
import Loading from "../../components/loading/Loading";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(false);

    try {
      const data = {
        username: name,
        email,
        password,
      };

      setLoading(true);
      const response = await http.post("/auth/register", data);
      setLoading(false);
      if (response.data) {
        setName("");
        setEmail("");
        setPassword("");

        // Make redirection
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <div className="register">
      <h1 className="registerTitle">Register</h1>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          {loading ? <Loading /> : "Register"}
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to={"/login"}>Back to Login</Link>
      </button>
      {error && <span className="error">Something went wrong...</span>}
    </div>
  );
}
