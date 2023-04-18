import React, { useState } from "react";
import Modal from "../utils/Modal";

import HeroImage from "../images/hero-image.png";
import WorkCulture from "../images/work-culture.svg";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div
      className="relative w-screen bg-cover bg-center flex items-center justify-center left-0 h-screen"
      style={{
        backgroundImage:
          "url('https://gcdnb.pbrd.co/images/ArfDLthFAKkL.png?o=1')",
      }}
    >
      <div className="text-center pb-12 md:pb-16">
        <h1
          className="pt-[100px] text-white text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          Teaching people to <br />
          learn{" "}
          <span
            className="text-white"
            style={{ textShadow: "5px 5px 1px rgba(0, 0, 0, 0.25)" }}
          >
            smart
          </span>
        </h1>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-xl text-white mb-8 font-medium"
            data-aos="zoom-y-out"
            data-aos-delay="150"
          >
            At{" "}
            <span
              className="text-white font-bold"
              style={{ textShadow: "3px 3px 3px rgba(0, 0, 0, 0.25)" }}
            >
              BitByBite
            </span>
            , We capture the positive potential of artificial intelligence by
            developing software solutions focused on emporing humankind
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroHome;
