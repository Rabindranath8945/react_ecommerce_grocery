import React from "react";
import { NavLink } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { ProductListApi } from "../api/BakeApi";

const CardProductFirst = () => {
  return (
    <>
      {ProductListApi.slice(0, 6).map((curElem) => {
        const {
          id,
          image,
          imageAlt,
          stock,
          name,
          qty,
          discount,
          prevPrice,
          price,
          to,
        } = curElem;
        return (
          <div className="flex-col" key={id}>
            <div className="list_product_card">
              <NavLink to="/singleproduct/:id">
                <div className="card_image">
                  <img src={image} alt={imageAlt} width="100px" />
                </div>
              </NavLink>

              <div className="card_sub_title">
                <div className="flex-row">
                  <div className="flex-col">
                    <div className="card_stock">
                      <BiCategoryAlt size="12px" color="#03770c" />
                      <NavLink className="product_cat_span" to="/">
                        <span>{stock}</span>
                      </NavLink>
                    </div>
                  </div>
                  <div className="flex-col">
                    <div className="card_discount">
                      <TbDiscount2 size="14px" color="#6e6e6e" />
                      <NavLink className="product_dis_span" to="/">
                        <span>{discount}</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_product_name">
                <NavLink to="/singleproduct/:id" className="product_name">
                  <p>{name}</p>
                </NavLink>
              </div>

              <div className="card_product_weight">
                <p>{qty}</p>
              </div>
              <div className="card_footer">
                <div className="flex-row">
                  <div className="flex-col">
                    <div className="card_price">
                      <p className="card_prev_price">{prevPrice}</p>
                      <p>₹{price}</p>
                    </div>
                  </div>
                  <div className="flex-col">
                    <div className="card_add">
                      <NavLink to={to}>
                        <button className="add-btn">ADD</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardProductFirst;
