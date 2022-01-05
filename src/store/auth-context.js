import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  token: null,
  isLoggedIn: false,
  login: async () => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  // Adding Persistance
  const localToken = localStorage.getItem("token");
  const [token, setToken] = useState(localToken);
  const isLoggedIn = !!token;

  const login = async (email, password) => {
    setToken("s343ad43a43s43d34sa43d43c4awsdceawfc");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };
  // const logout = () => {
  //   localStorage.removeItem("token");
    // localStorage.clear();
    // sessionStorage.clear();
    // localStorage.clear();
    // document.cookie.split(";").forEach(function (c) {
    //   document.cookie = c
    //     .replace(/^ +/, "")
    //     .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    // });
  //   setToken(null);
  //   <Navigate to="/signin" replace />;
  // };
  const ContextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: login,
    logout: logout,
  };
  return (
    <AuthContext.Provider value={ContextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

// if(email === "doc@gmail.com" && password === "secretpassword"){
//     localStorage.setItem('s343ad43a43s43d34sa43d43c4awsdceawfc', true);
//   }
