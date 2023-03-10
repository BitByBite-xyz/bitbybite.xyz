import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="33pt"
                height="33pt"
                viewBox="0 0 907.000000 907.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,907.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    d="M3920 8046 l0 -396 -249 0 c-276 0 -358 -10 -505 -59 -355 -121 -621
-411 -724 -789 -24 -88 -26 -114 -26 -282 0 -169 2 -193 27 -283 28 -106 102
-270 159 -354 l36 -52 -57 -6 c-695 -81 -1234 -618 -1321 -1319 -17 -130 -7
-350 20 -481 98 -466 397 -853 815 -1055 55 -26 125 -56 157 -66 l56 -17 5
-276 c5 -314 11 -350 92 -516 233 -481 826 -678 1311 -435 51 26 96 45 99 42
3 -3 5 -17 5 -31 0 -14 11 -69 25 -121 126 -470 526 -830 1016 -915 116 -20
327 -20 441 0 263 46 506 172 693 360 193 194 308 422 350 695 12 74 15 207
15 593 l0 498 33 11 c87 30 312 155 411 229 828 616 968 1781 310 2570 -308
370 -774 607 -1250 636 -57 3 -104 8 -104 10 0 2 21 29 47 61 95 117 165 247
218 405 47 140 65 255 65 412 0 355 -122 659 -367 916 -182 190 -404 316 -673
381 -79 20 -120 22 -607 25 l-523 4 0 -395z m1059 -80 c145 -37 302 -129 411
-240 177 -180 259 -395 247 -651 -7 -146 -23 -210 -87 -340 -90 -180 -218
-309 -395 -396 -161 -79 -180 -82 -502 -87 l-283 -3 0 871 0 872 273 -5 c209
-3 287 -8 336 -21z m-1189 -1446 l0 -680 -139 0 c-243 0 -359 27 -492 115
-138 93 -250 259 -285 425 -63 300 89 617 360 751 113 55 180 67 384 68 l172
1 0 -680z m2232 -768 c522 -118 920 -518 1029 -1032 26 -126 32 -370 10 -490
-85 -480 -435 -884 -899 -1040 -177 -59 -192 -60 -1023 -60 l-759 0 0 1326 0
1325 773 -4 c753 -3 774 -4 869 -25z m-2232 -1428 l0 -1056 -597 5 c-521 4
-608 6 -673 21 -639 148 -989 838 -734 1449 54 130 119 223 234 337 119 119
217 183 360 237 156 58 194 61 833 62 l577 1 0 -1056z m-2 -1797 l-3 -153 -38
-77 c-89 -180 -265 -287 -472 -287 -152 1 -262 45 -366 149 -112 112 -149 211
-149 403 l0 118 516 0 516 0 -4 -153z m2120 -319 c-4 -452 -5 -476 -26 -546
-58 -191 -174 -348 -339 -458 -353 -234 -851 -157 -1114 173 -71 89 -123 192
-149 297 -19 73 -20 112 -20 538 l0 458 798 3 c438 1 810 3 825 5 l29 2 -4
-472z"
                  />
                </g>
              </svg>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {/* <li>
                <Link
                  to="/signin"
                  className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                >
                  <span>Get in contact</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
