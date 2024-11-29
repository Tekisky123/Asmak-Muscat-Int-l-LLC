import service1 from "../assets/images/bg_feature1.jpg";
import service2 from "../assets/images/partner.jpg";
import service3 from "../assets/images/productnew.jpg";
import service4 from "../assets/images/qualitynew.jpg";

import { Link } from "react-router-dom";

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      image: service1,
      alt: "Leader",
      title: "Leader",
      link: "/leader",
      linkText: "Seafood",
      width: 285,
      height: 336,
    },
    {
      id: 2,
      image: service2,
      alt: "Partner",
      title: "Partner",
      link: "/partners",
      linkText: "Sustainable",
      width: 285,
      height: 336,
    },
    {
      id: 3,
      image: service3,
      alt: "Product",
      title: "Product",
      link: "/products",
      linkText: "World Class",
      width: 285,
      height: 336,
    },
    {
      id: 4,
      image: service4,
      alt: "Quality",
      title: "Quality",
      link: "/event",
      linkText: "Control",
      width: 285,
      height: 336,
    },
  ];

  return (
    <section className=" service bg-seafood" aria-label="service">
      <div className="service-container">
        <ul className="service-section">
          {services.map((service) => (
            <li key={service.id} className="service-card">
              <Link to={service.link} className="card-link has-before hover:shine">
                <figure className="service-card-banner service-img-holder">
                  <img
                    src={service.image}
                    width={service.width}
                    height={service.height}
                    loading="lazy"
                    alt={service.alt}
                    className="service-img-cover"
                  />
                  <figcaption className="service-overlay-text">{service.title}</figcaption>
                </figure>
              </Link>
              <div className="service-card-content">
                {/* <h3 className="service-card-title">{service.title}</h3> */}
                {/* <Link to={service.link} className="btn-text">
                  {service.linkText}
                </Link> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceSection;
