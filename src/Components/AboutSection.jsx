import img from "../assets/images/bg_welcome.jpg";

const AboutSection = () => {
  return (
    <section className="centered-about-section">
      <div className="centered-container">
        <div className="text-content">
          <h2 className="headline-1 ">Seafood Excellence Since Inception</h2>
          <p className="section-text">
            Asmak Muscat Int&apos;l has been a cornerstone in the seafood
            industry, committed to delivering the highest quality seafood
            sourced directly from Oman’s pristine waters. Our journey began with
            a vision to provide fresh, frozen, and expertly handled seafood to
            local and global markets, adhering to sustainability and quality at
            every step.
          </p>
        </div>
        <div className="image-content">
          <img src={img} alt="Seafood display" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
