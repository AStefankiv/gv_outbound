import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Link as LinkScroll } from "react-scroll";
import LogoGV from "../../public/assets/GV-Work-Learn-Travel-Logo-Full-Logo.svg";
import Link from "next/link";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [showDestinationsDropdown, setShowDestinationsDropdown] = useState(false);
  const [showExperiencesDropdown, setShowExperiencesDropdown] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hiddenPaths = [
    "/japan",
    "/japan/j_internship_form",
    "/japan/teach_eng_japan_form",
    "/korea",
    "/korea/teach_eng_korea_form",
    "/korea/k_internship_form",
    "/about",
    "/france",
    "/france/language_assistant_france",
    "/italy",
    "/italy/language_assistant_italy",
    "/costa_rica",
    "/costa_rica/teaching_mareas",
    "/costa_rica/green_life_community",
    "/costa_rica/green_life_conservation",
    "/spain",
    "/spain/language_assistant_spain",
    "/spain/spain_internship",
    "/global_sailing",
    "/global_sailing/sail_croatia",
    "/experiences/cultural_exchange",
    "/experiences/international_internship",
    "/experiences/job_placement",
    "/experiences/volunteering_and_conservation",
  ];

  const hideLinks = hiddenPaths.includes(router.pathname);

  const dropDownCountries = [
    { name: "Korea", link: "/korea" },
    { name: "Costa Rica", link: "/costa_rica" },
    { name: "France", link: "/france" },
    { name: "Italy", link: "/italy" },
    { name: "Spain", link: "/spain" },
    { name: "Hong Kong", link: "/hong_kong" },
    { name: "Global", link: "/global_sailing" },
  ];

  const dropDownExperiences = [
    { name: "Cultural Exchange", link: "/experiences/cultural_exchange" },
    { name: "International Internship", link: "/experiences/international_internship" },
    { name: "Job Placement", link: "/experiences/job_placement" },
    { name: "Volunteering and Conservation", link: "/experiences/volunteering_and_conservation" },
  ];

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="w-full px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href="/">
              <LogoGV className="h-16 w-auto" />
            </Link>
            <div className="hidden sm:block ml-20">
              <Link
                href="/about"
                className="text-lg px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative font-bold text-center"
              >
                About
              </Link>
            </div>
            <div className="hidden sm:block">
              <a
                href="mailto:outbound@gvenglish.com"
                className="text-lg px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative font-bold text-center"
              >
                Contact Us
              </a>
            </div>
          </div>

          {!hideLinks && (
            <ul className="hidden lg:flex col-start-13 col-end-13 text-black-500 items-center">
              {/* Destinations link with dropdown */}
              <div
                onMouseEnter={() => setShowDestinationsDropdown(true)}
                onMouseLeave={() => setShowDestinationsDropdown(false)}
                className="relative"
              >
                <LinkScroll
                  activeClass="active"
                  to="emptyComponent"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "countryLinks"
                      ? " text-orange-500 animation-active "
                      : " text-black-500 hover:text-orange-500")
                  }
                >
                  <div className="flex flex-col items-center justify-center">
                    Destinations
                    <svg
                      className="w-6 h-6 mt-[-5px] mb-[-10px]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </div>
                </LinkScroll>
                {showDestinationsDropdown && (
                  <div className="absolute top-full left-0 w-full bg-white-500 shadow-md z-20">
                    <ul className="flex flex-col items-center">
                      {dropDownCountries.map((country, index) => (
                        <Link key={index} href={country.link} className="w-full">
                          <li className="w-full px-4 py-2 cursor-pointer text-black-500 hover:text-orange-500">
                            {country.name}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Experiences link with dropdown */}
              <div
                onMouseEnter={() => setShowExperiencesDropdown(true)}
                onMouseLeave={() => setShowExperiencesDropdown(false)}
                className="relative"
              >
                <LinkScroll
                  activeClass="active"
                  to="experiences"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "experiences"
                      ? " text-orange-500 animation-active "
                      : " text-black-500 hover:text-orange-500")
                  }
                >
                  <div className="flex flex-col items-center justify-center">
                    Experiences
                    <svg
                      className="w-6 h-6 mt-[-5px] mb-[-10px]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </div>
                </LinkScroll>
                {showExperiencesDropdown && (
                  <div className="absolute top-full left-0 w-full bg-white-500 text-center shadow-md z-20">
                    <ul className="flex flex-col items-center">
                      {dropDownExperiences.map((experience, index) => (
                        <Link key={index} href={experience.link} className="w-full">
                          <li className="w-full px-4 py-2 cursor-pointer text-black-500 hover:text-orange-500">
                            {experience.name}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </ul>
          )}
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          {!hideLinks && (
            <ul className="flex w-full justify-between items-center text-black-500">
              <LinkScroll
                activeClass="active"
                to="countryLinks"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "countryLinks"
                    ? " border-orange-500 text-orange-500"
                    : " border-transparent")
                }
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599"
                  />
                </svg>
                Destinations
              </LinkScroll>

              <LinkScroll
                activeClass="active"
                to="experiences"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "experiences"
                    ? " border-orange-500 text-orange-500"
                    : " border-transparent")
                }
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
                Experiences
              </LinkScroll>

              <Link
                href="/about"
                className="flex flex-col items-center justify-center px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative font-bold text-center"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                About
              </Link>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;