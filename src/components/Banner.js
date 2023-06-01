import React from "react";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="section_inner">
            <div className="section_inner_item container">
              <h2>
                A Delectable Journey <br />
                Of Mystery And Desire
              </h2>
              <NavLink to="/products">
                <button className="btn-dark banner_btn">Shop Now</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
