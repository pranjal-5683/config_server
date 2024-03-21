// StructuredData.jsx
import React from "react";
import { Helmet } from "react-helmet";

const StructuredData = () => {
  const companyData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "Config Server LLP",
    founder: "Dinesh Raywade",
    description:
      "Config Server LLP is a software company specializing in IT solutions and development services. Our expertise includes Java, Spring Boot, Microservices, ReactJS, Python, Django, Angular, JavaScript, and DevOps. We specialize in implementing config servers in microservices architecture.",
    url: "https://configserverllp.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Office No, 303, 313, HDFC Bank, A-WING, Laxmi Horizon, Bengaluru - Mumbai Hwy, Punvale Bazar, Punawale, Mumbai, Pune, Maharashtra 411033",
      addressLocality: "Mumbai",
      addressRegion: "MH",
      postalCode: "411033",
      addressCountry: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 9156486909",
      contactType: "customer service",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.642399",
      longitude: "73.747799",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(companyData)}</script>
      <meta charSet="UTF-8" />
      <title>Config Server LLP</title>
      <meta
        name="description"
        content="Config Server LLP is a software company specializing in IT solutions and development services."
      />
      <meta
        name="keywords"
        content="software company, Config Server LLP, Dinesh Raywade, IT solutions, software development, Java, Spring Boot, Microservices, ReactJS, Python, Django, Angular, JavaScript, DevOps, config server, microservices architecture, config, configserver, configserverllp, configuration management services, network configuration, cloud server management"
      />
    </Helmet>
  );
};

export default StructuredData;
