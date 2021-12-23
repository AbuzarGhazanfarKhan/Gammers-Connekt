import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";
// import Cookies from "js-cookie";

function Signup() {
  // const [cookies, setCookies] = useState(null);
  const [userRegistration, setUserRegistration] = useState({
    firstname: "",
    lastname: "",
    email: "",
    confirm_pass: "",
    password: "",
  });
  // const [record, setRecord] = useState([]);

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserRegistration({ ...userRegistration, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...userRegistration,
      // id: Math.floor(Math.random() * 10000 + 1),
    };

    // setRecord([...record, newUser]);
    async function newRegistration() {
      // let user = { name, email, password };
      // console.log(user);

      let fetchUser = await fetch(
        "http://game-distribution-web.herokuapp.com/sign-up",
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
      console.warn(fetchUser);
      console.log(fetchUser.token);
      // fetchUser.cookie("token", fetchUser.token);
      // const cookie_key = "token";
      // bake_cookie(cookie_key, `${fetchUser.token}`);
      // read_cookie(cookie_key);
      // delete_cookie(cookie_key);
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
            type="text"
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

// {
//   record.map((currentElement) => {
//     currentElement.username
//     currentElement.email
//     currentElement.contact
//     currentElement.password
//   })
// }
