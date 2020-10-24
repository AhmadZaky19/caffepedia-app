import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwt from "jsonwebtoken";

const authCheck = () => {
  const token = window.localStorage.getItem("token");
  if (token === null) {
    return false;
  } else {
    const decodedToken = jwt.decode(token);
    const getTime = Number(new Date().getTime().toString().substr(0, 10));
    if (decodedToken.exp < getTime) {
      return false;
    } else return true;
  }
};

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return authCheck() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: location,
                msg: "Login to continue",
              },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
