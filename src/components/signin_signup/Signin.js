import { React, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { bake_cookie } from "sfcookies";
import Cookies from "js-cookie";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allActiveUser, setAllActiveUser] = useState([]);
  const [error, setError] = useState([]);

  // const [cookies, setCookie] = useCookies({ token: null });
  // const cookies = new Cookies();
  // const [cookie, setcookie] = useState(false);
  const navigate = useNavigate();

  // const authenticate = () => {
  //   setcookie(true);
  //   console.log(cookie);
  // };

  const submitForm = (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      alert("Please enter email and password");
    } else if (email === "" || password === "") {
      alert("Email or Password is not filled ");
    }
    const newEntry = { email: email, password: password };

    setAllActiveUser([...allActiveUser, newEntry]);
    sendData();
    async function sendData() {
      let fetchUser = await fetch(
        "https://game-distribution-web.herokuapp.com/sign-in",
        {
          method: "Post",
          headers: {
            "content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(newEntry),
        }
      );

      fetchUser = await fetchUser.json();
      console.log(fetchUser);
      if (fetchUser.error) {
        alert(fetchUser.error);
      }
      // cookies.set("token", fetchUser);
      // setCookie({ fetchUser });
      // console.log(cookies);
      // console.log(fetchUser.token);
      // const cookie_key = "token";
      // bake_cookie(cookie_key, `${fetchUser.token}`);
      {
        fetchUser.token && Cookies.set("token", `${fetchUser.token}`);
      }
      Cookies.get("token");
      const handleRedirect = () => {
        if (fetchUser.token) {
          fetchUser.token && navigate("/");
          window.location.reload();
        }
      };
      handleRedirect();
    }
  };

  return (
    <>
      <div className="big_container">
        {
          <center>
            <div style={{ color: "red" }}>
              {error.map((items) => (
                <p key={error.indexOf(items)}>{items}</p>
              ))}
            </div>
          </center>
        }
        <div className="container">
          <h1>Login</h1>
          <form action="" id="signin" onSubmit={submitForm}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" id="sign_in">
              Sign In
            </button>
            <p>
              Don't Have An Acount?{" "}
              <NavLink to="/sign_up">Sign Up For Free</NavLink>
            </p>
            <p>
              {" "}
              <NavLink to="/forget_password?fp=true">Forget password?</NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
