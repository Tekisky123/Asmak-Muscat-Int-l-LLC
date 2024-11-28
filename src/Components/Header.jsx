import { useEffect, useState } from "react";
import SmallScreenHeader from "./SmallScreenHeader";
import LargeScreenHeader from "./LargeScreenHeader";


const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1199);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isSmallScreen ? <SmallScreenHeader /> : <LargeScreenHeader />;
};

export default Header;
