import { useState } from "react";
import Axios from "axios";
import "../App.css";

function Register() {
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState([]);
  const [error, setError] = useState([]);

  Axios.defaults.withCredentials = true;

  const sendUserInfo = (username, email, password, confirmPasssword) => {
    if (
      username.length < 1 ||
      email.length < 1 ||
      password.length < 1 ||
      confirmPasssword.length < 1
    ) {
      setError("Please complete all fields.");
      return;
    } else if (password.length < 8) {
      setError("Passwords must be at least 8 characters in length.");
      return;
    } else if (password !== confirmPasssword) {
      setError("Password fields do not match. Please try again.");
      return;
    } else {
      Axios.post("https://gamer-corner-server.herokuapp.com/register", {
        username: username,
        email: email,
        password: password,
        confirmPasssword: confirmPasssword,
      }).then((response) => {
        console.log(response);
      });
      setError(`Successful registration. Welcome, ${username}`);
    }
  };

  return (
    <form className="form neonBorderPurple">
      <h1 className="neonTextPurple">Register New User</h1>

      <div className="form-field">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPasssword"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>

      <div className="submitButton">
        <button className="neonButtonPurple"
          onClick={() =>
            sendUserInfo(username, email, password, confirmPassword)
          }
        >
          Register
        </button>
      </div>

      <div className="errorSection">{error && <h2>{error}</h2>}</div>
    </form>
  );
}

export default Register;
