import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function ForgetPass() {
  const navigate = useNavigate();

  const textInput = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    const value = { email: textInput.current.value };

    const sendData = async () => {
      let fetchUser = await fetch(
        "https://game-distribution-web.herokuapp.com/sign-in?fp=true",
        {
          method: "Post",
          headers: {
            "content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(value),
        }
      );

      fetchUser = await fetchUser.json();

      fetchUser.status && alert(fetchUser.status);
      fetchUser.status && navigate("/change_pass");
    };
    sendData();
  };

  return (
    <div className="big_container">
      <div className="container">
        <h1>Forget Pasword</h1>
        <form id="forgetpass">
          <label htmlFor="fp">Enter the Email used for Registration</label>
          <input type="text" name="fp" id="fp" ref={textInput} />
          <button id="fpbutton" type="submit" onClick={handleClick}>
            Get New Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPass;
