import React from "react";

const CopyRight = () => {
  return (
    <>
      <div className="copyright">
        <div className="container">
          <div className="flex-row">
            <div className="flex-col">
              <div className="copyright_inner_start">
                <p>
                  &copy; {new Date().getFullYear()} All Rights Reserved by{" "}
                  <strong>Bake Farm's</strong>
                </p>
              </div>
            </div>
            <div className="flex-col">
              <p>Design & Developed with ❤ by Bake Farm's</p>
            </div>
            <div className="flex-col">
              <div className="copyright_inner_end">
                <div className="flex-row">
                  <span className="copyright_span">Download App</span>
                  <img
                    src="./images/app-store.png"
                    width="120px"
                    className="copyright_store"
                    alt="App Store"
                  />
                  <img
                    src="./images/google-play.png"
                    width="120px"
                    className="copyright_store"
                    alt="Google Play"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyRight;
