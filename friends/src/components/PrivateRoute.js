import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, friends, setFriends,  ...routeProps }) => {

  return (
    <Route
      {...routeProps}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} friends={friends} setFriends={setFriends} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
