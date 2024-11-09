import service1 from '../assets/images/fish1.jpeg';
import service2 from '../assets/images/fish2.jpeg';
import service3 from '../assets/images/fish3.jpeg';

import { Link } from 'react-router-dom';

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      image: service1,
      alt: 'Fresh Seafood',
      title: 'Fresh Seafood',
      link: '#',
      linkText: 'View Products',
      width: 285,
      height: 336,
    },
    {
      id: 2,
      image: service2,
      alt: 'Frozen Seafood',
      title: 'Frozen Seafood',
      link: '#',
      linkText: 'View Products',
      width: 285,
      height: 336,
    },
    {
      id: 3,
      image: service3,
      alt: 'Seafood Export',
      title: 'Seafood Export',
      link: '#',
      linkText: 'Learn More',
      width: 285,
      height: 336,
    },
  ];

  return (
    <section className="section service bg-seafood text-center" aria-label="service">
      <div className="container">
        <p className="section-subtitle label-2">Seafood Excellence</p>
        <h2 className="headline-1 section-title">Premium Seafood Services</h2>
        <p className="section-text">
          At Asmak Muscat Int&apos;l, we specialize in offering fresh and frozen seafood, ensuring the highest quality products sourced directly from Oman’s pristine waters.
        </p>

        <ul className="grid-list">
          {services.map((service) => (
            <li key={service.id}>
              <div className="service-card">
                <Link to={service.link} className="has-before hover:shine">
                  <figure
                    className="card-banner img-holder"
                    style={{
                      '--width': `${service.width}px`,
                      '--height': `${service.height}px`,
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
                  <Link to={service.link} className="btn-text hover-underline label-2">
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
