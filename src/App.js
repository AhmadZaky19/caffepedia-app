import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeMenu from "./pages/home-menu";
import Login from "./pages/login";
import History from "./pages/history";
import Register from "./pages/register";
import Privateroute from "./components/privateRoute";
import PrivateHome from "./components/privateHome";

const AppRouter = () => {
  return (
    <Router>
      <PrivateHome path="/" exact>
        <HomeMenu />
      </PrivateHome>
      {/* <Route path="/" exact component={HomeMenu} />*/}
      <Privateroute path="/history" exact>
        <History />
      </Privateroute>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register}></Route>
    </Router>
  );
};

export default AppRouter;
