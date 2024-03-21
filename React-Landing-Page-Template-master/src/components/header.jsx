import React from "react";

export const Header = ({ headdata }) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1
                  style={{
                    color: "#ffff",
                    textShadow: "3px 3px 20px #808080",
                  }}
                >
                  {headdata ? headdata.title : "Loading"}
                </h1>
                <p>{headdata ? headdata.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Explore More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
