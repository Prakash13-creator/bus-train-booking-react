import { useState } from "react";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function loginValidation(event) {

    event.preventDefault();

    if (username === "" || password === "") {
      alert("Please enter Username and Password");
      return;
    }

    alert("Login Successful!");
  }

  return (
    <div className="form-page">

      <div className="form-box">

        <h2>Login</h2>

        <form onSubmit={loginValidation}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;