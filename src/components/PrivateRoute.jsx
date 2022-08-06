import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuthState } from "../providers/authProvider";

const PrivateRoute = ({ children, redirectTo, ...rest }) => {
  const { isLoggedIn } = useAuthState();

  return (
    <Route
      {...rest}
      render={() => (isLoggedIn ? children : <Navigate to={redirectTo} />)}
    />
  );
};

// const PrivateRoute = () => {
//   const isAdmin = getUser();
//   return <Route render={isAdmin ? <Redirect to="/confirm" /> : <NotFound />} />;
// };

export default PrivateRoute;
