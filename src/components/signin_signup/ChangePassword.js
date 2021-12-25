import React from "react";

function ChangePassword() {
  const password = useRef(null);
  const confirm_password = useRef(null);
  const email = useRef(null);

  const handleClick = () => {
    const value = {
      password: password.current.value,
      confirm_password: confirm_password.current.value,
      email: email.current.value,
    };

    let fetchUser = await fetch(
      "https://game-distribution-web.herokuapp.com/sign-in",
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
    {
      fetchUser.status &&
        setStatus(true) &&
        alert(fetchUser.status) &&
        navigate("/change_pass");
    }
  };

  return (
    <div className="big_container">
      <div className="container">
        <h1>Forget Pasword</h1>
        <form id="forgetpass">
          <label htmlFor="password">Enter New Password</label>
          <input type="text" name="password" id="password" ref={textInput} />
          <label htmlFor="confirm_password">Confirm New Password</label>
          <input
            type="text"
            name="confirm_password"
            id="confirm_password"
            ref={textInput}
          />
          <label htmlFor="email">Enter the Email used for Registration</label>
          <input type="text" name="email" id="email" ref={textInput} />
          <button id="fpbutton" type="submit" onClick={handleClick}>
            Get New Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
