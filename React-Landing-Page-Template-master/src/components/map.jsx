import React from "react";

const GoogleMap = () => {
  return (
    <div className="contain">
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15122.528067837407!2d73.7399508!3d18.635614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbd153954adf%3A0x92d05edd91aec5bc!2sConfig%20Server%20LLP!5e0!3m2!1sen!2sin!4v1710583159490!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
