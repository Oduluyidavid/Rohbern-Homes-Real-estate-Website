import React from "react";
import { DarkModeProvider } from "./components/DarkModeContext";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import PopularAreas from "./sections/PopularAreas";
import Properties from "./sections/properties";
import Services from "./sections/Services";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import YoutubeVideo from "./sections/YoutubeVideo";

const App = () => {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <YoutubeVideo
          links={[
            "https://www.youtube.com/embed/VZxTVBaUzxQ?si=ZB6xSV6gw_DiYE5k",
            "https://www.youtube.com/embed/TVP3gJ6afBU?si=K21UkSZ-27A7OQsg",
          ]}
        />
        <PopularAreas />
        <Properties />
        <Services />
        <Clients />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
};

export default App;
