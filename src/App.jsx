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
            "https://www.youtube.com/embed/57RO8jfHnWU?si=VqnLwS8fVHNoytce",
            "https://www.youtube.com/embed/9HajrxlN_dA?si=6-ib6zbkxFwJajfX",
            "https://www.youtube.com/embed/fAebZrL1H30?si=colrn4lKwYH5K5pB",
            "https://www.youtube.com/embed/zlLDS1k27hI?si=oDGbKwgo0YplXeLK"
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
