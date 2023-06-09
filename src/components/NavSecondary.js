import React from "react";
import { NavLink } from "react-router-dom";
import { FiMapPin, FiShoppingCart } from "react-icons/fi";

const NavSecondary = () => {
  return (
    <>
      <div className="navbar_secnd">
        <div className="container">
          <div className="navbar_inner">
            <div className="head-flex-row">
              <div className="head-flex-col">
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
              <div className="head-flex-col">
                <div className="navbar_item location_item">
                  <NavLink to="/" className="navbar_loc_link">
                    <div className="head-flex-row">
                      <div className="head-flex-col">
                        <FiMapPin className="head-loc-icon" />
                      </div>
                      <div className="head-flex-col">
                        <p className="upper_text">Rabindranath's address</p>
                        <p className="lower_text">Haldia, WB, 721657</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </div>

              <div className="head-flex-col">
                <div className="navbar_item">
                  <div className="header_search_bar">
                    <input
                      type="text"
                      placeholder="Search Products ..."
                      className="head_searchbar"
                    />
                  </div>
                </div>
              </div>
              <div className="head-flex-col">
                <div className="navbar_item account_item">
                  <NavLink to="/" className="navbar_loc_link">
                    <p className="upper_text">Hello, Rabindranath</p>
                    <p className="lower_text">My account</p>
                  </NavLink>
                </div>
              </div>
              <div className="head-flex-col">
                <div className="navbar_item return_item">
                  <NavLink to="/" className="navbar_loc_link">
                    <p className="upper_text">Returns</p>
                    <p className="lower_text">& Orders</p>
                  </NavLink>
                </div>
              </div>
              <div className="head-flex-col">
                <div className="navbar_item cart_item">
                  <NavLink to="/" className="navbar_loc_link">
                    <button className="cart-btn">
                      <div className="head-flex-row">
                        <div className="head-flex-col">
                          <FiShoppingCart className="head_cart_icon" />
                        </div>
                        <div className="head-flex-col">
                          <span className="cart_text">My Cart</span>
                        </div>
                      </div>
                    </button>
                  </NavLink>
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
