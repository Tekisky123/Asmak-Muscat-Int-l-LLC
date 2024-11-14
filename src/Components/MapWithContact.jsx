
const MapWithContact = () => {
  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13897.608607939766!2d58.2100853!3d23.6308064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de3d980d34189%3A0x7b3adde6aae03e63!2sAsmak%20Muscat%20Int&#39;l%20LLC%20Fish%20Exporter!5e1!3m2!1sen!2sin!4v1731565245643!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map-frame"
          title="Asmak Muscat Location"
        ></iframe>
        <div className="map-contact-card">
          <h2 className="map-contact-title">Contact Details</h2>
          <p className="map-contact-subtitle">Get in touch with us Today</p>
          <div className="map-contact-details">
            <p><strong>Call us</strong></p>
            <p>Mobile: +968 92850600</p>
            <p>Tel: +968 24050604</p>
            <p><strong>Address</strong></p>
            <p>P.O.BOX 1741, POSTAL CODE 122, AL MABELA, SULTANATE OF OMAN, C.R.NO 1341511</p>
            <p><strong>Email</strong></p>
            <p>info@asmkmct.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapWithContact;
