import React from "react";
import "./services.css"; // Import the separate CSS file

const Services = () => {
  const services = [
    {
      title: "Travel Consultancy",
      description: "We provide expert travel advice to help you plan your perfect trip. Our team ensures you get the best experience tailored to your needs."
    },
    {
      title: "Trip Planning",
      description: "From flights to accommodations, we handle all aspects of your trip planning so you can travel stress-free."
    },
    {
      title: "Destination Guides",
      description: "Explore detailed guides on top travel destinations, including attractions, local culture, and travel tips."
    },
    {
      title: "Custom Itineraries",
      description: "We create personalized travel itineraries based on your interests and preferences to maximize your experience."
    },
    {
      title: "Travel Budget Planning",
      description: "Get assistance in managing your travel budget to ensure you get the most value out of your journey."
    },
    {
      title: "Group Travel Coordination",
      description: "Planning a group trip? Let us coordinate everything from accommodations to activities for a seamless experience."
    }
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
