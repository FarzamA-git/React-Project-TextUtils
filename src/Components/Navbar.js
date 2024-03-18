import React from "react";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" exact>
          {props.title}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>props.toggle("primary")}style={{height:"30px",width:"20px", cursor:"pointer"}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>props.toggle("danger")}style={{height:"30px",width:"20px", cursor:"pointer"}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>props.toggle("success")}style={{height:"30px",width:"20px", cursor:"pointer"}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>props.toggle("warning")}style={{height:"30px",width:"20px", cursor:"pointer"}}></div>
          </div>
          <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`} onClick={()=>props.toggle(null)}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "Jammmy King" };
