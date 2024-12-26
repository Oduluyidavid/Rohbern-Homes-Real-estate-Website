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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <>
      <DarkModeProvider>
        {/* Toastify Container with Dynamic theme */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={darkMode ? "dark" : "light"} // Toggle theme based on darkMode value
        />
        <Header />
        <Hero />
        <About />
        <YoutubeVideo
          links={[
            "https://www.youtube.com/embed/57RO8jfHnWU?si=VqnLwS8fVHNoytce",
            "https://www.youtube.com/embed/9HajrxlN_dA?si=6-ib6zbkxFwJajfX",
            "https://www.youtube.com/embed/fAebZrL1H30?si=colrn4lKwYH5K5pB",
            "https://www.youtube.com/embed/zlLDS1k27hI?si=oDGbKwgo0YplXeLK",
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
