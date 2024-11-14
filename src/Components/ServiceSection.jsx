import service1 from "../assets/images/fish1.jpeg";
import service2 from "../assets/images/fish2.jpeg";
import service3 from "../assets/images/fish3.jpeg";

import { Link } from "react-router-dom";

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      image: service1,
      alt: "Leader",
      title: "Leader",
      link: "#",
      linkText: "Seafood",
      width: 285,
      height: 336,
    },
    {
      id: 2,
      image: service2,
      alt: "Partner",
      title: "Partner",
      link: "#",
      linkText: "Sustainable",
      width: 285,
      height: 336,
    },
    {
      id: 3,
      image: service3,
      alt: "Product",
      title: "Product",
      link: "#",
      linkText: "World Class",
      width: 285,
      height: 336,
    },
    {
      id: 3,
      image: service3,
      alt: "Quality",
      title: "Quality",
      link: "#",
      linkText: "Control",
      width: 285,
      height: 336,
    },
  ];

  return (
    <section
      className="section service bg-seafood text-center"
      aria-label="service"
    >
      <div className="container">
        <ul className="service-section">
          {services.map((service) => (
            <li key={service.id}>
              <div className="service-card">
                <Link to={service.link} className="has-before hover:shine">
                  <figure
                    className="card-banner img-holder"
                    style={{
                      "--width": `${service.width}px`,
                      "--height": `${service.height}px`,
                    }}
                  >
                    <img
                      src={service.image}
                      width={service.width}
                      height={service.height}
                      loading="lazy"
                      alt={service.alt}
                      className="img-cover"
                    />
                  </figure>
                </Link>

                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <Link to={service.link}>{service.title}</Link>
                  </h3>
                  <Link
                    to={service.link}
                    className="btn-text hover-underline label-2"
                  >
                    {service.linkText}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceSection;
