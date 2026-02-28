import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

function Welcome() {

  const navigate = useNavigate();

  return (

    <div className="container">

      <h1>Welcome to PopX</h1>

      <p>lorem ipsum dolor sit amet.</p>
      <p>consectetur adipiscing elit.</p>

      <button
        className="primaryBtn"
        onClick={() => navigate("/register")}
      >
        Create Account
      </button>

      <button
        className="secondaryBtn"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>

    </div>

  );
}

export default Welcome;