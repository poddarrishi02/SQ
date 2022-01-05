import { useLocation, Navigate } from "react-router-dom";
import React, {useContext} from 'react';
import { AuthContext } from "./auth-context";
// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx
export default function ProtectedRoute(props) {
    let AuthCtx = useContext(AuthContext);
    // let location = useLocation();
  
    if (!AuthCtx.isLoggedIn) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/signin" replace />;
    }
  
    return props.children;
  }