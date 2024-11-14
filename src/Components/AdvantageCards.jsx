import service1 from "../assets/images/service-1-540x432.jpg";
import service2 from "../assets/images/service-2-540x432.jpg";
import service3 from "../assets/images/service-3-540x432.jpg";
import service4 from "../assets/images/service-4-540x432.jpg";
const AdvantageCards = () => {
  const cardData = [
    {
      title: "Responsibly Sourced",
      description:
        "Responsibly-sourced seafood is the key to the modern, safe and profitable seafood industry.",
      imageUrl: service4,
    },
    {
      title: "Environment",
      description:
        "The seafood industry has a concern over climate impact, and takes responsibility in any case.",
      imageUrl: service3,
    },
    {
      title: "Staff",
      description:
        "Our experts work hard to maintain the quality seafood for our dear customers exclusively.",
      imageUrl: service2,
    },
    {
      title: "Marketplace",
      description:
        "Your business becomes beneficial by providing the customers with the best.",
      imageUrl: service1,
    },
  ];

  return (
    <section className="advantages-section">
      <h2 className="headline-1">Our Advantages</h2>
      <div className="advantages-cards-container">
        {cardData.map((card, index) => (
          <div key={index} className="advantage-card">
            <img src={card.imageUrl} alt={card.title} className="card-image" />
            <div className="card-content">
              <h4 className="card-heading">{card.title}</h4>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantageCards;
