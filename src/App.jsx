import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Home from "./pages/dashboard/home";
import Income from "./pages/dashboard/income";
import Expense from "./pages/dashboard/expense";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Home />}></Route>
          <Route path="/income" element={<Income />}></Route>
          <Route path="/expense" element={<Expense />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Navigate to="/dashboard"></Navigate>
  ) : (
    <Navigate to="/login"></Navigate>
  );
};
