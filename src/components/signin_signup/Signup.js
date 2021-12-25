import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [userRegistration, setUserRegistration] = useState({
    firstname: "",
    lastname: "",
    email: "",
    confirm_pass: "",
    password: "",
  });

  const [error, setError] = useState([]);
  const [verify, setVerify] = useState([]);
  const [status, setStatus] = useState([]);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...userRegistration,
      redirect_url: "https://compassionate-agnesi-be9563.netlify.app/sign_in",
    };

    async function newRegistration() {
      let fetchUser = await fetch(
        "https://game-distribution-web.herokuapp.com/sign-up",
        {
          method: "Post",
          headers: {
            "content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );
      fetchUser = await fetchUser.json();
      if (fetchUser.error) {
        setError(Object.values(fetchUser.error));
      }

      if (fetchUser.status && fetchUser.verify) {
        setStatus(fetchUser.status);
        setVerify(fetchUser.verify);
      }
    }
    newRegistration();

    setUserRegistration({
      firstname: "",
      lastname: "",
      email: "",
      confirm_pass: "",
      password: "",
    });
  };
  return (
    <div className="big_container">
      {
        <center>
          <div style={{ color: "red" }}>
            {<div style={{ color: "red" }}>{error}</div>}
          </div>
        </center>
      }

      {status && verify ? (
        <center style={{ color: "green" }}>
          <p>{status}</p>
          <p>{verify}</p>
        </center>
      ) : null}
      <div className="container1">
        <h1>Sign up</h1>
        <form action="" id="signup" onSubmit={onSubmit}>
          <label htmlFor="firstname">firstname</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            autoComplete="off"
            value={userRegistration.firstname}
            onChange={handleOnChange}
          />
          <label htmlFor="lastname">lastname</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            autoComplete="off"
            value={userRegistration.lastname}
            onChange={handleOnChange}
          />
          <label htmlFor="Email">Email Id</label>
          <input
            type="text"
            name="email"
            id="Email"
            autoComplete="off"
            value={userRegistration.email}
            onChange={handleOnChange}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={userRegistration.password}
            onChange={handleOnChange}
          />
          <label htmlFor="confirm_pass">Confirm_pass</label>
          <input
            type="password"
            name="confirm_pass"
            id="confirm_pass"
            autoComplete="off"
            value={userRegistration.confirm_pass}
            onChange={handleOnChange}
          />
          <button type="submit" id="sign_up">
            Sign Up
          </button>
          <p>
            Already Have An Acount?{" "}
            <NavLink to="/sign_in">Sign In From Here</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
