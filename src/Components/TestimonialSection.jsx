import avatar from "../assets/images/testi-avatar.jpg";
const TestimonialSection = () => {
  return (
    <section
      className="section testi text-center has-bg-image"
      aria-label="testimonials"
    >
      <div className="container">
        <div className="quote">”</div>

        <p className="headline-2 testi-text">
          I wanted to thank you for inviting me down for that amazing dinner the
          other night. The food was extraordinary.
        </p>

        <div className="wrapper">
          <div className="separator"></div>
          <div className="separator"></div>
          <div className="separator"></div>
        </div>

        <div className="profile">
          <img
            src={avatar}
            width="100"
            height="100"
            loading="lazy"
            alt="Sam Johnson"
            className="img"
          />
          <p className="label-2 profile-name">Sam Johnson</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
