import React from "react";
import {
  RiWhatsappFill,
  RiFacebookCircleFill,
  RiInstagramFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="flex-row">
          <div className="flex-col topbar_item">
            <div className="topbar_icon">
              <RiWhatsappFill size="1rem" />
              <Link
                className="topbar_links"
                to={{ pathname: "https://wa.link/zyifwt" }}
              >
                Whatsapp/91-9547-4728-39
              </Link>
            </div>
          </div>
          <div className="flex-col topbar_item">
            <div className="topbar_icon">
              <RiFacebookCircleFill size="1rem" />
              <Link
                className="topbar_links"
                to={{ pathname: "https://www.facebook.com/page.bakefarms" }}
              >
                Facebook.com/page.bakefarms
              </Link>
            </div>
          </div>
          <div className="flex-col">
            <div className="topbar_icon">
              <RiInstagramFill size="1rem" />
              <Link
                className="topbar_links"
                to={{ pathname: "https://www.instagram.com/bakefarms/" }}
              >
                Instagram.com/bakefarms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
