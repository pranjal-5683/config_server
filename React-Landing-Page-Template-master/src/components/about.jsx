import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <h2 className="aboutback">About Us</h2>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img
              src="img/about.jpeg"
              style={{ borderRadius: "15px" }}
              className="img-responsive"
              alt=""
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h3>Background</h3>
              <p>
                With humble beginnings as a small institute founded by three
                visionary friends, our journey spans 11 incredible years.
                Throughout this time, we have nurtured an amazing experience,
                growing into a leading force in the industry. Today, we stand
                proud as pioneers, having achieved unparalleled success in
                various domains, all while fostering a vibrant team of 500+
                talented individuals.
              </p>
              <h3>Our Core Values</h3>
              <p>
                Our true measure of success is not just our growth, but the
                success stories of those we serve. Over 300 students have
                embarked on successful journeys, securing coveted positions in
                various MNCs through our dedicated programs. As leaders in
                Software Development, Cyber Security, Cloud-Based Solutions, and
                Educational fields, we are committed to empowering individuals
                to reach their full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
