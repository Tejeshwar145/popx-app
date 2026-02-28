import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register({ setUser }) {

  const navigate = useNavigate();

  const [form, setForm] = useState({
  name: "",
  phone: "",
  email: "",
  password: "",
  company: "",
  agency: ""
});

  function handleChange(e) {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  }

  function handleRadioChange(e) {

  setForm({
    ...form,
    agency: e.target.value
  });

}

  function validateForm() {

    if (!form.name.trim()) {
      alert("Full Name is required");
      return false;
    }

    if (!form.phone.trim()) {
      alert("Phone Number is required");
      return false;
    }

    if (!form.email.trim()) {
      alert("Email Address is required");
      return false;
    }

    if (!form.email.includes("@")) {
      alert("Enter valid email address");
      return false;
    }

    if (!form.password.trim()) {
      alert("Password is required");
      return false;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return false;
    }

    if (!form.agency) {
      alert("Please select if you are an Agency");
      return false;
    }

    return true;
  }

  function registerUser() {

    if (!validateForm()) {
      return;
    }

    localStorage.setItem(
      "popxUser",
      JSON.stringify(form)
    );

    setUser(form);

    alert("Account created successfully!");

    navigate("/account");

  }

  return (

    <div className="container">

      <h2>Create your PopX account</h2>

      <input
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email Address"
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />

      <input
        name="company"
        placeholder="Company Name"
        onChange={handleChange}
      />

      <div className="radioGroup">

        <p className="radioTitle">
          Are you an Agency? <span className="required">*</span>
        </p>

        <div className="radioOptions">

          <label className="radioLabel">

            <input
              type="radio"
              name="agency"
              value="Yes"
              checked={form.agency === "Yes"}
              onChange={handleRadioChange}
            />

            <span>Yes</span>

          </label>

          <label className="radioLabel">

            <input
              type="radio"
              name="agency"
              value="No"
              checked={form.agency === "No"}
              onChange={handleRadioChange}
            />

            <span>No</span>

          </label>

        </div>

      </div>
      <button
        className="primaryBtn"
        onClick={registerUser}
      >
        Create Account
      </button>

    </div>

  );
}

export default Register;