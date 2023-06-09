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
              <div className="copyright_inner_center">
                <p>Hello Copyright</p>
              </div>
            </div>
            <div className="flex-col">
              <div className="copyright_inner_end">
                <p>Hello Copyright</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyRight;
