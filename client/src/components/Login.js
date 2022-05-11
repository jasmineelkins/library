import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const defaultFormState = { username: "", password: "" };

function Login({ user, setUser }) {
  const [formData, setFormData] = useState(defaultFormState);
  const [passwordShown, setPasswordShown] = useState(false);
  const [error, setError] = useState(null);

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

    // POST request: log in user by creating a session
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    })
      .then((res) => res.json())
      .then((userObj) => {
        console.log("Logged in user: ", userObj);

        if (userObj.username) {
          setUser(userObj);
          setError(null);
        } else {
          if (userObj.error) {
            setError(userObj.error.login);
          } else {
            setError(null);
          }

          setUser(null);
        }
      })
      .catch((error) => console.log(error.message));

    // reset form
    setFormData(defaultFormState);
  }

  const errorsToDisplay = error === null ? null : error;

  return (
    <div className="authFormContainer">
      <form onSubmit={(e) => handleSubmit(e)} className="authForm">
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

        <button onClick={(e) => togglePassword(e)}>{passwordShownIcon}</button>

        <span className="errorMessage">{errorsToDisplay}</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
