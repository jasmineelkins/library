import React, { useState } from "react";

const defaultFormState = { username: "", password: "" };

function Login(props) {
  const [formData, setFormData] = useState(defaultFormState);

  function handleChange(e) {
    setFormData({
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // POST request: log in user by creating a session
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        formData,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Log in: ", data))
      .catch((error) => console.log(error.message));

    // reset form
    setFormData(defaultFormState);
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={(e) => handleChange(e)}
        ></input>

        <label>Password:</label>
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Login;
