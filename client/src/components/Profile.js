import React, { useState, useEffect } from "react";

function Profile({ user, setUser }) {
  const defaultProfileForm = {
    name: user.name,
    username: user.username,
    about: user.about,
    image:
      "https://res.cloudinary.com/dbl7owtdh/image/upload/v1652387229/cartoon-cat-g3531c4ee5_1920_pwmyxe.png",
  };

  const [editModeOff, setEditModeOff] = useState(true);
  const [profileFormData, setProfileFormData] = useState({
    defaultProfileForm,
  });

  useEffect(() => {
    getCurrentUser();
  }, [setUser, user.id]);

  function handleClick(e) {
    setEditModeOff(false);
  }

  function handleChange(e) {
    setProfileFormData({ ...profileFormData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(profileFormData);

    updateUserInfo();

    // reset form to show user data
    setProfileFormData({
      name: profileFormData.name,
      username: profileFormData.username,
      about: profileFormData.about,
    });

    setEditModeOff(true);
  }

  async function getCurrentUser() {
    try {
      const response = await fetch(`/users/${user.id}`);
      const currentUserObj = await response.json();

      // console.log("current user: ", currentUserObj);
      setUser(currentUserObj);
      setProfileFormData(defaultProfileForm);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function updateUserInfo() {
    try {
      const response = await fetch(`/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: profileFormData.name,
          username: profileFormData.username,
          about: profileFormData.about,
        }),
      });
      const updatedUserObj = await response.json();

      // console.log("Updated user: ", updatedUserObj);
      setUser(updatedUserObj);
      setProfileFormData(updatedUserObj);
    } catch (error) {
      console.log("ERROR: ", error.message);
    }
  }

  return (
    <div className="profileContainer">
      {/* <h2>Profile</h2> */}
      <img
        src="https://res.cloudinary.com/dbl7owtdh/image/upload/v1652387229/cartoon-cat-g3531c4ee5_1920_pwmyxe.png"
        alt="cartoon cat"
        className="avatar"
      ></img>
      <span className="dateJoined">Joined {user.created_at}</span>

      {editModeOff ? (
        <div className="profileInnerDiv">
          <div className="profileRow">
            <span className="profileLabel">Name</span>
            <div className="rightSpanDiv">
              <span className="profileSpan">{user.name}</span>
            </div>
          </div>

          <div className="profileRow">
            <span className="profileLabel">Username</span>
            <div className="rightSpanDiv">
              <span className="profileSpan">{user.username}</span>
            </div>
          </div>

          <div className="profileRow about">
            <span className="profileLabel about">About</span>
            <div className="rightSpanDiv">
              <span className="profileSpan about">{user.about}</span>
            </div>
          </div>

          <button onClick={(e) => handleClick(e)}>Edit Profile</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="profileForm">
          <div className="formRow">
            <label>Name</label>
            <input
              name="name"
              value={profileFormData.name}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div className="formRow">
            <label>Username</label>
            <input
              name="username"
              value={profileFormData.username}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div className="formRow">
            <label>About</label>
            <textarea
              name="about"
              value={profileFormData.about}
              onChange={(e) => handleChange(e)}
            ></textarea>
          </div>

          <button type="submit">Save changes</button>
        </form>
      )}
    </div>
  );
}

export default Profile;
