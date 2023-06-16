import React from "react";

import JacobSussman from "../images/JacobSussman.jpg";
import IanPark from "../images/IanPark.jpg";
import RickSong from "../images/RickSong.jpg";
import SashwatDas from "../images/SashwatDas.jpg";

function Testimonials() {
  return (
    <section className="relative">
      {/* Illustration behind content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32"
        aria-hidden="true"
      >
        <svg
          width="1760"
          height="518"
          viewBox="0 0 1760 518"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-02"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g
            transform="translate(0 -3)"
            fill="url(#illustration-02)"
            fillRule="evenodd"
          >
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="flex flex-col items-center mb-4">
              <h2 className="h2">Our Team</h2>
              <div className="bg-gradient-to-r from-purple-500 to-pink-300 h-1 w-16 rounded-md my-2"></div>
            </div>
            <p className="text-xl text-gray-600">
              We bring a dynamic range of expertise from leading global firms.
            </p>
          </div>

          {/* Meet The Founders */}
          <div className="flex flex-wrap justify-center mt-[-70px]">
            <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative max-w-sm center-text border-2 border-gray-200 rounded bg-white max-h-[210px] w-[250px]">
                {/* Jacob Sussman */}
                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0 flex flex-col items-center">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <img
                      className="relative rounded-full"
                      src={JacobSussman}
                      width="96"
                      height="96"
                      alt="Jacob Sussman"
                    />
                  </div>
                  <cite className="block font-bold text-lg not-italic mb-1">
                    Jacob Sussman
                  </cite>
                  <div className="text-gray-600">
                    <span>CTO</span>
                  </div>
                  <div className="text-gray-600 flex items-center">
                    <img
                      src="https://logos-world.net/wp-content/uploads/2020/08/Caterpillar-Logo.png"
                      alt="Cat Logo"
                      className="w-20 h-auto m-t-[3px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative max-w-sm center-text border-2 border-gray-200 rounded bg-white max-h-[210px] w-[250px]">
                {/* Ian Park */}
                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0 flex flex-col items-center">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <img
                      className="relative rounded-full"
                      src={IanPark}
                      width="96"
                      height="96"
                      alt="Ian Park"
                    />
                  </div>
                  <cite className="block font-bold text-lg not-italic mb-1">
                    Ian Park
                  </cite>
                  <div className="text-gray-600">
                    <span>COO</span>
                  </div>
                  <div className="text-gray-600 flex items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/William_Blair_wordmark.svg/1280px-William_Blair_wordmark.svg.png"
                      alt="William & Blair Logo"
                      className="w-[110px] h-auto mt-[17px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative max-w-sm center-text border-2 border-gray-200 rounded bg-white max-h-[210px] w-[250px]">
                {/* Rick Song  */}
                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0 flex flex-col items-center">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <img
                      className="relative rounded-full"
                      src={RickSong}
                      width="96"
                      height="96"
                      alt="Rick Song"
                    />
                  </div>
                  <cite className="block font-bold text-lg not-italic mb-1">
                    Rick Song
                  </cite>
                  <div className="text-gray-600">
                    <span>CEO</span>
                  </div>
                  <div className="text-gray-600 flex items-center">
                    <img
                      src="https://180dc.org/wp-content/uploads/2018/12/Bain-Company-Logo.png"
                      alt="Bain & Company Logo"
                      className="w-[90px] h-auto ml-[5px] mt-[5px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative max-w-sm center-text border-2 border-gray-200 rounded bg-white max-h-[210px] w-[250px]">
                {/* Ian Park */}
                <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0 flex flex-col items-center">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <img
                      className="relative rounded-full"
                      src={SashwatDas}
                      width="96"
                      height="96"
                      alt="Ian Park"
                    />
                  </div>
                  <cite className="block font-bold text-lg not-italic mb-1">
                    Sashwat Das
                  </cite>
                  <div className="text-gray-600">
                    <span>CAIO</span>
                  </div>
                  <div className="text-gray-600 flex items-center">
                    <img
                      src="https://www.statestreet.com/Logo.svg"
                      alt="William & Blair Logo"
                      className="w-[110px] h-auto mt-[17px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
