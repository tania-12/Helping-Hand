import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";
import {Login} from "./pages/Login";
import {Register} from "./pages/Register";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import ProfilePage from "./pages/Profile";
import { AuthProvider } from "./context/AuthContext";
import AuthButton from "./components/AuthButton";
import PrivateRouteRequiresAuth from "./components/PrivateRouteRequiresAuth";
import "./App.css";
import Footer from "./components/Footer";


function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">
          Helping Hand
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/Home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Register">
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Menu">
              Menu
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/Profile">
              Profile
            </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
      <AuthButton />
    </nav>
  );
}


function App() {
  

  return (
    
    <AuthProvider>
    <BrowserRouter>
      <Navigation />
      <div className="container-xl text-center">
        <div className="row justify-content-center">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    <Footer />
    </BrowserRouter>
    </AuthProvider>
    
  );
}




export default App;
