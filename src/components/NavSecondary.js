import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const NavSecondary = () => {
  return (
    <>
      <div className="navbar_secnd">
        <div className="container">
          <div className="navbar_inner">
            <div className="flex-row">
              <div className="flex-col">
                <div className="navbar_item_logo">
                  <NavLink to="/">
                    <img
                      src="./images/bake-farms-logo.png"
                      alt="Bake Farm's Logo"
                      width={80}
                    />
                  </NavLink>
                </div>
              </div>
              <div className="flex-col">
                <div className="navbar_item">
                  <Nav />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavSecondary;
