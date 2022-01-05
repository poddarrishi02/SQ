import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";

import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Landing from "./Components/LandingPage/Landing";
import Layout from "./containers/Layout.js";
import ProtectedRoute from "./store/ProtectedRoute";
import FactorPortfolio from "./Components/FactPortfolio/FactorPortfolio";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route
              exact
              path="/main"
              element={
                <ProtectedRoute>
                  <Landing />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/factorportfolio" element={<FactorPortfolio />}></Route>
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
