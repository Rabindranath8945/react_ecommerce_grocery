import React from "react";
import { OfferFirstRow, OfferSecondRow, OfferThirdRow } from "../api/BakeApi";
import { NavLink } from "react-router-dom";

const Offer = () => {
  return (
    <>
      <div className="offer">
        <div className="container">
          <div className="offer_inner_content">
            <h2 className="offer_content_heading">Bake Farm's Offer</h2>
          </div>
          <div className="flex-row">
            {OfferFirstRow.map((CurElem) => {
              const { id, image, title, to } = CurElem;

              return (
                <div className="flex-col" key={id}>
                  <NavLink className="card_link" to={to}>
                    <div className="offer_card">
                      <div className="offer_card_inner_content">
                        <div className="offer_card_image">
                          <img
                            src={image}
                            alt="Card Image"
                            width="100px"
                            height="100px"
                          />
                        </div>
                        <div className="offer_card_title">
                          <h3 className="offer_card_heading">{title}</h3>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
          <div className="flex-row">
            {OfferThirdRow.map((CurElem) => {
              const { id, image, title, to } = CurElem;

              return (
                <div className="flex-col" key={id}>
                  <NavLink className="card_link" to={to}>
                    <div className="offer_card">
                      <div className="offer_card_inner_content">
                        <div className="offer_card_image">
                          <img
                            src={image}
                            alt="Card Image"
                            width="100px"
                            height="100px"
                          />
                        </div>
                        <div className="offer_card_title">
                          <h3 className="offer_card_heading">{title}</h3>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
          <div className="flex-row">
            {OfferSecondRow.map((CurElem) => {
              const { id, image, title, to } = CurElem;

              return (
                <div className="flex-col" key={id}>
                  <NavLink className="card_link" to={to}>
                    <div className="offer_card">
                      <div className="offer_card_inner_content">
                        <div className="offer_card_image">
                          <img
                            src={image}
                            alt="Card Image"
                            width="100px"
                            height="100px"
                          />
                        </div>
                        <div className="offer_card_title">
                          <h3 className="offer_card_heading">{title}</h3>
                        </div>
                      </div>
                    </div>
                  </NavLink>
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
