import eventImage1 from '../assets/images/event-1.jpg';
import eventImage2 from '../assets/images/event-2.jpg';
import eventImage3 from '../assets/images/event-3.jpg';

const EventSection = () => {
  return (
    <section className="section event bg-black-10" aria-label="event">
      <div className="container">
        <p className="section-subtitle label-2 text-center">Recent Updates</p>

        <h2 className="section-title headline-1 text-center">Upcoming Event</h2>

        <ul className="grid-list">
          <li>
            <div className="event-card has-before hover:shine">
              <div className="card-banner img-holder" style={{ '--width': '350px', '--height': '450px' }}>
                <img
                  src={eventImage1}
                  width="350"
                  height="450"
                  loading="lazy"
                  alt="Flavour so good you’ll try to eat with your eyes."
                  className="img-cover"
                />
                <time className="publish-date label-2" dateTime="2022-09-15">15/09/2022</time>
              </div>
              <div className="card-content">
                <p className="card-subtitle label-2 text-center">Food, Flavour</p>
                <h3 className="card-title title-2 text-center">
                  Flavour so good you’ll try to eat with your eyes.
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div className="event-card has-before hover:shine">
              <div className="card-banner img-holder" style={{ '--width': '350px', '--height': '450px' }}>
                <img
                  src={eventImage2}
                  width="350"
                  height="450"
                  loading="lazy"
                  alt="Healthy Food."
                  className="img-cover"
                />
                <time className="publish-date label-2" dateTime="2022-09-08">08/09/2022</time>
              </div>
              <div className="card-content">
                <p className="card-subtitle label-2 text-center">Healthy Food</p>
                <h3 className="card-title title-2 text-center">
                  Flavour so good you’ll try to eat with your eyes.
                </h3>
              </div>
            </div>
          </li>

          <li>
            <div className="event-card has-before hover:shine">
              <div className="card-banner img-holder" style={{ '--width': '350px', '--height': '450px' }}>
                <img
                  src={eventImage3}
                  width="350"
                  height="450"
                  loading="lazy"
                  alt="Recipie."
                  className="img-cover"
                />
                <time className="publish-date label-2" dateTime="2022-09-03">03/09/2022</time>
              </div>
              <div className="card-content">
                <p className="card-subtitle label-2 text-center">Recipie</p>
                <h3 className="card-title title-2 text-center">
                  Flavour so good you’ll try to eat with your eyes.
                </h3>
              </div>
            </div>
          </li>
        </ul>

        <a href="#" className="btn btn-primary">
          <span className="text text-1">View Our Blog</span>
          <span className="text text-2" aria-hidden="true">View Our Blog</span>
        </a>
      </div>
    </section>
  );
};

export default EventSection;
