import { Route, Routes } from "react-router-dom";
import "./App.css";
import FooterSection from "./Components/FooterSection";
import HeaderSection from "./Components/HeaderSection";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <HeaderSection />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <FooterSection />
    </>
  );
}

export default App;
