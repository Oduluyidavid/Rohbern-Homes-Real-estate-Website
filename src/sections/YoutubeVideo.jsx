import React from "react";
import { useDarkMode } from "../components/DarkModeContext";

const YoutubeVideo = ({ links }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        id="services"
        className={`${darkMode ? "dark bg-gray-800" : "light bg-red-100"} 
       lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2 grid-flow-col-1 mx-auto justify-center items-start lg:px-20 px-6 py-10 gap-10`}
      >
        {links.map((link, index) => (
          <iframe
            key={index}
            // width="560"
            height="315"
            src={link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="min-w[320px]"
          ></iframe>
        ))}
      </section>
    </div>
  );
};

export default YoutubeVideo;
