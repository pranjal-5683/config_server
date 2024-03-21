import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import axios from "axios";
import GoogleMap from "./components/map";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [headdata, setHeadData] = useState("");
  const [features, setFeatures] = useState("");
  const [services, setServices] = useState("");
  const [testimonials, setTestimonials] = useState("");
  const [team, setTeam] = useState("");
  const [images, setImages] = useState("");

  const getHead = async () => {
    await axios.get("http://localhost:5000/gethead").then((response) => {
      setHeadData(response.data[0]);
    });
  };
  const getFeature = async () => {
    await axios
      .get("http://localhost:5000/fetchfeaturetitle")
      .then((response) => {
        setFeatures(response.data);
      });
  };
  const getServices = async () => {
    await axios
      .get("http://localhost:5000/fetchservicestitle")
      .then((response) => {
        setServices(response.data);
      });
  };
  const getTestimonials = async () => {
    await axios
      .get("http://localhost:5000/fetchtestimonialstitle")
      .then((response) => {
        setTestimonials(response.data);
      });
  };
  const getTeam = async () => {
    await axios.get("http://localhost:5000/fetchteamtitle").then((response) => {
      setTeam(response.data);
    });
  };
  const getimages = async () => {
    await axios
      .get("http://localhost:5000/fetchgalleryimage")
      .then((response) => {
        setImages(response.data);
      });
  };

  useEffect(() => {
    getHead();
    getFeature();
    getServices();
    getTestimonials();
    getTeam();
    getimages();
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header headdata={headdata} />
      <Features features={features} />
      <About data={landingPageData.About} />
      <Services services={services} />
      <Gallery images={images} />
      <Testimonials testimonials={testimonials} />
      <Team team={team} />
      <GoogleMap />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
