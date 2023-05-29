import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="flex-row">
          <div className="flex-col">
            <div className="topbar_item">
              <div className="topbar_icon">
                <BsWhatsapp size="1.3rem" />
                <Link
                  className="topbar_links"
                  to={{ pathname: "https://wa.link/zyifwt" }}
                >
                  Whatsapp/91-9547-4728-39
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
