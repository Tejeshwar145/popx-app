import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser }) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {

    const storedUser =
      JSON.parse(localStorage.getItem("popxUser"));

    if (!storedUser) {

      alert("No user found. Please register first.");
      return;

    }

    if (
      storedUser.email === email &&
      storedUser.password === password
    ) {

      setUser(storedUser);

      navigate("/account");

    } else {

      alert("Invalid email or password");

    }

  }

  return (

    <div className="container">

      <h2>Signin to your PopX account</h2>

      <input
        placeholder="Email Address"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="primaryBtn"
        onClick={loginUser}
      >
        Login
      </button>

    </div>

  );
}

export default Login;