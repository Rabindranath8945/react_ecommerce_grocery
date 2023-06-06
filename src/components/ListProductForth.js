import React from "react";
import { NavLink } from "react-router-dom";
import CardProductForth from "./CardProductForth";

const ListProduct = ({ sectionHeading, pageLink }) => {
  return (
    <>
      <div className="list_product">
        <div className="container">
          <div className="list_product_content">
            <div className="list_product_heading">
              <div className="flex-row">
                <div className="flex-col">
                  <h2>{sectionHeading}</h2>
                </div>
                <div className="flex-col">
                  <div className="right_link">
                    <NavLink className="right_link_inner" to={pageLink}>
                      see all
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="list_product_inner">
              <div className="flex-row">
                <CardProductForth />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
