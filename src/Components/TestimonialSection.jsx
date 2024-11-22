import avatar from "../assets/images/logo.png";
const TestimonialSection = () => {
  return (
    <section
      className="section testi text-center has-bg-image"
      aria-label="testimonials"
    >
      <div className="testi-container">
        {/* <div className="quote">”</div> */}

        <p className="headline-2 testi-text">
          Best Seafood From Sultanate of Oman
        </p>

        <div className="wrapper">
          {/* <div className="separator"></div>
          <div className="separator"></div>
          <div className="separator"></div> */}
        </div>

        <div className="profile">
          <img
            src={avatar}
            width="200"
            height="200"
            loading="lazy"
            alt="Sam Johnson"
            className="img"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
