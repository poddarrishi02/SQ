import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";

import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Landing from "./Components/LandingPage/Landing";
import Layout from "./containers/Layout.js";
import ProtectedRoute from "./store/ProtectedRoute";
import FactorPortfolio from "./Components/FactPortfolio/FactorPortfolio";
import Optimiser from "./Components/Optimiser/Optimiser";
import OptiSlider from "./Components/Optimiser/OptiSlider";
import Graphs from "./Components/Optimiser/Graphs";
import OptiSector from "./Components/OptiSector/OptiSector";
function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route exact path="/main" element={<ProtectedRoute><Landing /></ProtectedRoute>}></Route>
            <Route exact path="/factorportfolio" element={<ProtectedRoute><FactorPortfolio /></ProtectedRoute>}></Route>
            <Route exact path="/optimiser" element={<ProtectedRoute><Optimiser /></ProtectedRoute>}></Route>
            <Route exact path="/slider" element={<ProtectedRoute><OptiSlider /></ProtectedRoute>}></Route>
            <Route exact path="/graphs" element={<ProtectedRoute><Graphs /></ProtectedRoute>}></Route>
            <Route path="/optimisersector" element={<ProtectedRoute><OptiSector/></ProtectedRoute>}></Route>
            <Route exact path="/" element={<SignIn />}></Route>
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
