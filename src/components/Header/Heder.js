import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <div className="Header">
      <NavLink exact activeStyle={{ color: "white" }} to="/">
        People
      </NavLink>
      <NavLink exact activeStyle={{ color: "white" }} to="/planets">
        Planets
      </NavLink>
    </div>
  );
};
