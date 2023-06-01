import React from "react";
import { NavLink } from "react-router-dom";
import { FeaturesApi } from "../api/BakeApi";

const Features = () => {
  return (
    <>
      <div className="features">
        <div className="container">
          <div className="features_content">
            <div className="flex-row">
              {FeaturesApi.map((curElem) => {
                const { id, image, imageAlt, to } = curElem;
                return (
                  <div className="flex-col" key={id}>
                    <div className="features_items">
                      <NavLink to={to}>
                        <img
                          className="features_image"
                          src={image}
                          alt={imageAlt}
                        />
                      </NavLink>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
