import React from "react";
import { NavLink } from "react-router-dom";
import { BiAlignRight } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Nav = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_list">
          <li>
            <NavLink className="navbar_links" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar_links" to="/upcoming">
              Upcoming!
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar_links" to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar_links" to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar_links" to="/shop">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar_icon navbar_links_icon" to="/">
              <AiOutlineSearch size="1.7rem" color="#000" />
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar_links_icon" to="/">
              <BiAlignRight size="1.7rem" color="#000" />
            </NavLink>
          </li>
        </div>
      </div>
    </>
  );
};

export default Nav;
