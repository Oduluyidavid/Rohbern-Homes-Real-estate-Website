import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import house1 from "../assets/images/house1.jpg";
import house2 from "../assets/images/house2.jpg";
import house3 from "../assets/images/house3.jpg";
import house4 from "../assets/images/house4.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const properties = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section
        id="properties"
        className="lg:w-[98%] m-auto lg:px-20 px-6 py-20 
      w-full flex flex-col justify-center items-start gap-10"
      >
        <div className=" flex flex-col justify-center items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            PROPERTIES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-4xl font-semibold
           dark:text-white"
          >
            Explore the latest
          </h1>
        </div>
        {/*properties grid start from here*/}
        <div
          id="grid-box"
          className="w-full h-full flex lg:flex-row flex-col justify-between items-center gap-8"
        >
          <img
            src={house1}
            alt="House"
            className="object-cover lg:w-1/3 w-[100%] h-[300px] rounded-lg"
          />

          <img
            src={house2}
            alt="House 2"
            className="object-cover lg:w-1/3 w-[100%] h-[300px] rounded-lg"
          />

          <img
            src={house3}
            alt="House 3"
            className="object-cover lg:w-1/3 w-[100%] h-[300px] rounded-lg"
          />
          <img
            src={house4}
            alt="House 4"
            className="object-cover lg:w-1/3 w-[100%] h-[300px] rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default properties;
