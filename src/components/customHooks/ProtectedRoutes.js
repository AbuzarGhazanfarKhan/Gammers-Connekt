import React from "react";
import Cookies from "js-cookie";
import { Outlet } from "react-router-dom";
// import Signup from "../signin_signup/Signup";

const useAuth = () => {
  const user = { isLoggedin: Cookies.get("token") };
  return user && user.isLoggedin;
};

function ProtectedRoutes() {
  const isAuth = useAuth();
  return !isAuth && <Outlet />;
}

export default ProtectedRoutes;
