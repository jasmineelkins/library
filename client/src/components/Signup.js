import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const defaultFormState = {
  name: "",
  username: "",
  password: "",
  password_confirmation: "",
};

function Signup({ user, setUser }) {
  const [formData, setFormData] = useState(defaultFormState);
  const [passwordShown, setPasswordShown] = useState(false);
  const [errors, setErrors] = useState(null);

  const passwordShownIcon =
    passwordShown === true ? <AiFillEye /> : <AiFillEyeInvisible />;

  const errorsToDisplay = errors === null ? null : errors[0];

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
    createNewUser();

    setFormData(defaultFormState);
  }

  async function createNewUser() {
    try {
      const response = await fetch(`/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          username: formData.username,
          password: formData.password,
          password_confirmation: formData.password_confirmation,
        }),
      });
      const userObj = await response.json();

      console.log("User signup data: ", userObj);

      if (userObj.username) {
        setUser(userObj);
        setErrors(null);
      } else {
        if (userObj.errors) {
          setErrors(userObj.errors);
        } else {
          setErrors(null);
        }

        setUser(null);
      }
    } catch (error) {
      console.log("ERROR: ", error.message);
    }
  }

  return (
    <div className="authFormContainer">
      <form onSubmit={(e) => handleSubmit(e)} className="authForm">
        <div className="formRow">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div className="formRow">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div className="formRow">
          <label>Password</label>
          <input
            type={passwordShown ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div className="formRow">
          <label>Confirm password</label>
          <input
            type={passwordShown ? "text" : "password"}
            name="password_confirmation"
            value={formData.password_confirmation}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div className="formButtonDiv">
          <button onClick={(e) => togglePassword(e)}>
            {passwordShownIcon}
          </button>
          <button type="submit">Submit</button>
        </div>

        <span className="errorMessage">{errorsToDisplay}</span>
      </form>
    </div>
  );
}

export default Signup;
