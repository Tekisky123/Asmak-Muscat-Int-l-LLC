const ReservationSection = () => {
  return (
    <section className="reservation">
      <div className="container">
        <div className="form reservation-form bg-black-10">
          <form action="" className="form-left">
            <h2 className="headline-1 text-center">Contact Us</h2>

            <p className="form-text text-center">
              Get in touch with us today!
            </p>

            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                autoComplete="off"
                className="input-field"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                autoComplete="off"
                className="input-field"
                required
              />
            </div>

            <div className="">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                autoComplete="off"
                className="input-field"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              autoComplete="off"
              className="input-field"
              required
            ></textarea>

            <button type="submit" className="btn btn-secondary">
              <span className="text text-1">Send Request</span>
              <span className="text text-2" aria-hidden="true">
                Send Request
              </span>
            </button>
          </form>

          <div className="form-right text-center">
            <h2 className="headline-1 text-center">Contact Details</h2>

            <p className="contact-label">Mobile</p>
            <a href="tel:+96892850600" className="body-1 contact-number hover-underline">
              +968 92850600
            </a>

            <p className="contact-label">Tel</p>
            <a href="tel:+96824050604" className="body-1 contact-number hover-underline">
              +968 24050604
            </a>

            <div className="separator"></div>

            <p className="contact-label">Address</p>
            <address className="body-4">
              P.O.BOX 1741 <br />
              Postal Code 122 <br />
              Al Mabela, Sultanate of Oman <br />
              C.R. No 1341511
            </address>

            <p className="contact-label">Email</p>
            <a href="mailto:info@asmakmct.com" className="body-1 contact-number hover-underline">
              info@asmakmct.com
            </a>

            <p className="contact-label">Need more details?</p>
            <p className="body-4">
              Contact us and we’ll call you back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;
