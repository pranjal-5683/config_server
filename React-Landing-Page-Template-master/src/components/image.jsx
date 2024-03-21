import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <a
          href={require(`../images/${largeImage}`)}
          title={title}
          data-lightbox-gallery="gallery1"
        >
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img
            src={require(`../images/${largeImage}`)}
            class="d-block w-100"
            style={{ objectFit: "cover", borderRadius: "40px" }}
            height="250px"
            width="95%"
            alt={title}
          />{" "}
        </a>{" "}
      </div>
    </div>
  );
};
