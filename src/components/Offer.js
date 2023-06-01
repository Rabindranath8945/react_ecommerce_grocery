import React from "react";
import { OfferApi, OffferAppi } from "../api/BakeApi";
import { NavLink } from "react-router-dom";

const Offer = () => {
  return (
    <>
      <div className="offer">
        <div className="container">
          <div className="flex-row">
            {OfferApi.map((CurElem) => {
              const { id, image, imageAlt, title, to } = CurElem;

              return (
                <div className="flex-col" key={id}>
                  <div className="offer_card">
                    <NavLink className="card_link" to={to}>
                      <div className="offer_card_inner_content">
                        <div className="offer_card_image">
                          <img src={image} alt={imageAlt} width="100px" />
                        </div>
                      </div>
                      <div className="offer_card_title">
                        <p className="offer_card_heading">{title}</p>
                      </div>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
