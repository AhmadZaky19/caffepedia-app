import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwt from "jsonwebtoken";

const authCheckAdmin = () => {
  const token = window.localStorage.getItem("token");
  if (token === null) {
    return false;
  } else {
    const decodedToken = jwt.decode(token);
    console.log(decodedToken.id_level);
    const getTime = Number(new Date().getTime().toString().substr(0, 10));
    if (decodedToken.exp < getTime || decodedToken.id_level !== 2) {
      return false;
    } else return true;
  }
};
console.log(authCheckAdmin());
const PrivateRouteHistory = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return authCheckAdmin() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: location,
                msg: "Admin Only",
              },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRouteHistory;
