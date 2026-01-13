import React, { useState } from "react";

const Main = () => {

  const heroImages = [
    "https://http2.mlstatic.com/D_NQ_807157-MLA102424226983_122025-OO.webp",
    "https://http2.mlstatic.com/D_NQ_724921-MLA103748196977_012026-OO.webp",
    "https://http2.mlstatic.com/D_NQ_872416-MLA102317800381_122025-OO.webp",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const changeImage = (direction) => {
    setCurrentImage((prev) => {
      return direction === "prev"
      ? prev === 0 ? heroImages.length - 1 : prev - 1
      : prev === heroImages.length - 1 ? 0 :  prev + 1
    });
  };

  return (
    <>
      <section className="hero">
        <button className="hero-btn left" onClick={() => changeImage("prev")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="hero-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>

        <div className="hero-slider">
          <div className={`hero-track slide-${currentImage}`}>
            {heroImages.map((img, index) => (
              <div className="hero-slide" key={index}>
                <img src={img} alt="Oferta" />
              </div>
            ))}
          </div>
        </div>

        <button className="hero-btn right" onClick={() => changeImage("next")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="hero-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </section>
    </>
  );
};

export default Main;
