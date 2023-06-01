import React from "react";
import { NavLink } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";

const ListProduct = () => {
  return (
    <>
      <div className="list_product">
        <div className="container">
          <div className="list_product_content">
            <div className="list_product_heading">
              <div className="flex-row">
                <div className="flex-col">
                  <h2>Best Selling Products</h2>
                </div>
                <div className="flex-col">
                  <div className="right_link">
                    <NavLink className="right_link_inner" to="/">
                      see all
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="list_product_inner">
              <div className="flex-row">
                <div className="flex-col">
                  <div className="list_product_card">
                    <div className="card_image">
                      <img
                        src="./images/categories/candies_chocolates.jpg"
                        alt="Card"
                        width="100px"
                      />
                    </div>
                    <div className="card_categories">
                      <BiCategoryAlt size="12px" />
                      <NavLink className="product_cat_span" to="/">
                        <span>Candies</span>
                      </NavLink>
                    </div>
                    <div className="card_product_name">
                      <p>Handmade Mix Nuts Chocolate</p>
                    </div>

                    <div className="card_product_weight">
                      <p>500g</p>
                    </div>
                    <div className="card_footer">
                      <div className="flex-row">
                        <div className="flex-col">
                          <div className="card_price">
                            <p>₹200</p>
                          </div>
                        </div>
                        <div className="lex-col">
                          <div className="card_add">
                            <NavLink to="/products">
                              <button className="add-btn">ADD</button>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
