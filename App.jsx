import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Welcome from "./pages/Welcome.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AccountSettings from "./pages/AccountSettings.jsx";

import "./styles/styles.css";

function App() {

  const [user, setUser] = useState(
  JSON.parse(localStorage.getItem("popxUser"))
);

  return (

    <Routes>

      <Route path="/" element={<Welcome />} />

      <Route
        path="/login"
        element={<Login setUser={setUser} />}
      />

      <Route
        path="/register"
        element={<Register setUser={setUser} />}
      />

      <Route
        path="/account"
        element={<AccountSettings user={user} />}
      />

    </Routes>

  );
}

export default App;