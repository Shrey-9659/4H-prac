import React, { useState } from "react";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5050/register", {
      method : "POST",
      headers : {"Content-Type": "application/json"},
      body : JSON.stringify({username : userName, password})
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Enter username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Enter password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
