import service1 from '../assets/images/service-1.jpg';
import service2 from '../assets/images/service-2.jpg';
import service3 from '../assets/images/service-3.jpg';
import shape1 from '../assets/images/shape-1.png';
import shape2 from '../assets/images/shape-2.png';

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      image: service1,
      alt: 'Breakfast',
      title: 'Breakfast',
      link: '#',
      linkText: 'View Menu',
      width: 285,
      height: 336,
    },
    {
      id: 2,
      image: service2,
      alt: 'Appetizers',
      title: 'Appetizers',
      link: '#',
      linkText: 'View Menu',
      width: 285,
      height: 336,
    },
    {
      id: 3,
      image: service3,
      alt: 'Drinks',
      title: 'Drinks',
      link: '#',
      linkText: 'View Menu',
      width: 285,
      height: 336,
    },
  ];

  return (
    <section className="section service bg-black-10 text-center" aria-label="service">
      <div className="container">
        <p className="section-subtitle label-2">Flavors For Royalty</p>
        <h2 className="headline-1 section-title">We Offer Top Notch</h2>
        <p className="section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the
          industry&apos;s standard dummy text ever.
        </p>

        <ul className="grid-list">
          {services.map((service) => (
            <li key={service.id}>
              <div className="service-card">
                <a href={service.link} className="has-before hover:shine">
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
                </a>

                <div className="card-content">
                  <h3 className="title-4 card-title">
                    <a href={service.link}>{service.title}</a>
                  </h3>
                  <a href={service.link} className="btn-text hover-underline label-2">
                    {service.linkText}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <img
          src={shape1}
          width="246"
          height="412"
          loading="lazy"
          alt="shape"
          className="shape shape-1 move-anim"
        />
        <img
          src={shape2}
          width="343"
          height="345"
          loading="lazy"
          alt="shape"
          className="shape shape-2 move-anim"
        />
      </div>
    </section>
  );
};

export default ServiceSection;
