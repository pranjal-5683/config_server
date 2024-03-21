import React from "react";

export const Testimonials = ({testimonials}) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>What our clients say</h2>
        </div>
        <div className="row">
          {testimonials
            ? testimonials.map((item, i) => (
                <div key={`${item.name}-${i}`} className="col-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src={require(`../images/${item.image}`)} height='100px'/>{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{item.description}"</p>
                      <div className="testimonial-meta"> - {item.title} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
