import React from "react";

export const Services = ({services}) => {
  return (
    <div id="services" className="text-center">
      <div className="container-fluid">
        <div className="section-title container">
          <h2>Our Services</h2>
          <p>Transforming Ideas into Reality! From web design and software development to mobile apps, AI, and ethical hacking, we deliver cutting-edge solutions that empower businesses to thrive in the digital era. Experience innovation with us.</p>
        </div>

        <div className="row">
          {services
            ? services.map((item, i) => (
                <div key={`${item.name}-${i}`} className="col-md-4">
                  {" "}
                  <img style={{borderRadius:'40px'}} src={require(`../images/${item.image}`)} width='100%' height="250px"/>
                  <div className="service-desc">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>

      </div>
    </div>
  );
};
