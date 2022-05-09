import React, { useState } from "react";

const defaultFormState = {
  username: "",
  password: "",
  password_confirmation: "",
};

function Signup(props) {
  const [formData, setFormData] = useState(defaultFormState);

  function handleChange(e) {
    setFormData({
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // POST request: create a new user
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
        password_confirmation: formData.password_confirmation,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("User signup data: ", data))
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

        <label>Password Confirmation:</label>
        <input
          type="text"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={(e) => handleChange(e)}
        ></input>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Signup;
