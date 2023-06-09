import React from "react";
import { NavLink } from "react-router-dom";
import { FooterMenu } from "../api/BakeApi";
import CopyRight from "./CopyRight";

const Footer = () => {
  const showData = true;
  return (
    <>
      <div className="footer">
        <div className="container">
          {showData ? (
            <div className="footer_inner">
              <div className="foot-flex-row">
                <div className="flex-col">
                  <div className="footer_list_heading_content">
                    <p className="footer_list_heading">Useful Links</p>
                  </div>
                  <div className="foot-flex-row">
                    <div className="flex-col">
                      <div className="footer_list">
                        {FooterMenu.slice(0, 6).map((curElem) => {
                          const { id, name, link } = curElem;
                          return (
                            <ol className="footer_list_item" key={id}>
                              <li>
                                <NavLink to={link}>{name}</NavLink>
                              </li>
                            </ol>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="footer_list">
                        {FooterMenu.slice(6, 12).map((curElem) => {
                          const { id, name, link } = curElem;
                          return (
                            <ol className="footer_list_item" key={id}>
                              <li>
                                <NavLink to={link}>{name}</NavLink>
                              </li>
                            </ol>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="footer_list">
                        {FooterMenu.slice(12, 18).map((curElem) => {
                          const { id, name, link } = curElem;
                          return (
                            <ol className="footer_list_item" key={id}>
                              <li>
                                <NavLink to={link}>{name}</NavLink>
                              </li>
                            </ol>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col">
                  <div className="footer_list_heading_content">
                    <p className="footer_list_heading">Categories</p>
                  </div>
                  <div className="foot-flex-row">
                    <div className="flex-col">
                      <div className="footer_list">
                        {FooterMenu.slice(0, 6).map((curElem) => {
                          const { id, name, link } = curElem;
                          return (
                            <ol className="footer_list_item" key={id}>
                              <li>
                                <NavLink to={link}>{name}</NavLink>
                              </li>
                            </ol>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="footer_list">
                        {FooterMenu.slice(6, 12).map((curElem) => {
                          const { id, name, link } = curElem;
                          return (
                            <ol className="footer_list_item" key={id}>
                              <li>
                                <NavLink to={link}>{name}</NavLink>
                              </li>
                            </ol>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex-col">
                      <div className="footer_list">
                        {FooterMenu.slice(12, 18).map((curElem) => {
                          const { id, name, link } = curElem;
                          return (
                            <ol className="footer_list_item" key={id}>
                              <li>
                                <NavLink to={link}>{name}</NavLink>
                              </li>
                            </ol>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CopyRight />
            </div>
          ) : (
            <p>Please use Data</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;
