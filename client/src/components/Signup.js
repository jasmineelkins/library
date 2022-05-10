import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const defaultFormState = {
  username: "",
  password: "",
  password_confirmation: "",
};

function Signup({ user, setUser }) {
  const [formData, setFormData] = useState(defaultFormState);
  const [passwordShown, setPasswordShown] = useState(false);

  const passwordShownIcon =
    passwordShown === true ? <AiFillEye /> : <AiFillEyeInvisible />;

  function togglePassword(e) {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
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
      .then((user) => {
        console.log("User signup data: ", user);
        setUser(user);
      })
      .catch((error) => console.log(error.message));

    // reset form
    setFormData(defaultFormState);
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="formContainer">
        <div className="formRow">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div className="formRow">
          <label>Password:</label>
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div className="formRow">
          <label>Password Confirmation:</label>
          <input
            type={passwordShown ? "text" : "password"}
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <button onClick={(e) => togglePassword(e)}>{passwordShownIcon}</button>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Signup;
