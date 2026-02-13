import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8082/api/users/register", user);

    localStorage.setItem("email", user.email); // Save email
    navigate("/middle");
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" placeholder="Password" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;
