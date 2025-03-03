import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoutesComponent from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <RoutesComponent />
      <Footer />
    </>
  );
};

export default App;
