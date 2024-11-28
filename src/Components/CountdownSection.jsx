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

    >
      <div className="countdown-overlay">
        <div className="countdown-container">
          <div className="countdown-item">
            {isInView && (
              <CountUp
                suffix="+"
                start={0}
                end={22}
                duration={3}
                delay={0}
                className="countdown-number"
                key={isInView ? "countup1" : undefined}
              />
            )}
            <div className="countdown-title">Varieties of Fishes</div>
          </div>
          <div className="countdown-item">
            {isInView && (
              <CountUp
                start={0}
                suffix="+"
                end={22}
                duration={3}
                delay={0}
                className="countdown-number"
                key={isInView ? "countup2" : undefined}
              />
            )}
            <div className="countdown-title">Countries</div>
          </div>
          <div className="countdown-item">
            {isInView && (
              <CountUp
                suffix="sq"
                start={0}
                end={1500}
                duration={3}
                delay={0}
                className="countdown-number"
                key={isInView ? "countup3" : undefined}
              />
            )}
            <div className="countdown-title">
              Large Frozen <br />Storage Space
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
