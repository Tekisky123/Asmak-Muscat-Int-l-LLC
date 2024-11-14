import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const CountdownSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="countdown-section"
      style={{ backgroundImage: "url(/path-to-your-image.jpg)" }}
    >
      <div className="countdown-overlay">
        <div className="countdown-container">
          <div className="countdown-item">
            {isInView && (
              <CountUp
                start={0}
                end={324}
                duration={3}
                delay={0}
                className="countdown-number"
                key={isInView ? "countup1" : undefined}
              />
            )}
            <div className="countdown-title">
              varieties of shrimp, mussels, lobster & finfish
            </div>
          </div>
          <div className="countdown-item">
            {isInView && (
              <CountUp
                start={0}
                end={32}
                duration={3}
                delay={0}
                className="countdown-number"
                key={isInView ? "countup2" : undefined}
              />
            )}
            <div className="countdown-title">
              countries exported to and imported from
            </div>
          </div>
          <div className="countdown-item">
            {isInView && (
              <CountUp
                start={0}
                end={2870}
                duration={3}
                delay={0}
                className="countdown-number"
                key={isInView ? "countup3" : undefined}
              />
            )}
            <div className="countdown-title">
              thousand sq. feet of frozen storage space
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
