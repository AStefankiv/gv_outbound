import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";

import Image from "next/image";

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

  const dropDownCountries = [
    { name: "Costa Rica", link: "/jobs-in-costa-rica" },
    { name: "Croatia", link: "/visa-for-croatia" },
    { name: "France", link: "/work-holiday-france" },
    { name: "GV Snow", link: "/gv-snow" },
    { name: "Hong Kong", link: "/work-opportunities-hong-kong" },
    { name: "Italy", link: "/working-holiday-italy" },
    { name: "Japan", link: "/working-holiday-japan" },
    { name: "Korea", link: "/working-holiday-korea" },
    { name: "Spain", link: "/work-opportunities-spain" },
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
        {/* CTA Section */}
        <div
          id="cta-big"
          className="flex justify-end items-center sm:flex-row flex-col text-center sm:text-right"
          style={{ padding: "0.5rem" }}
        >
          <p className="va-heading" style={{ marginRight: "0.5rem" }}>
            Is Travel/Work Experience Right For You?
          </p>
          <a
            href="https://cr-gve.virtualadviser.com/?lead_src=w-header"
            className="py-2 lg:py-2 px-3 lg:px-5 text-black-900 font-semibold rounded-lg bg-orange-500 transition-all outline-none hover:shadow-dark-grey-lg"
          >
            Take the Free Quiz
          </a>
        </div>
        {/* End of CTA Section */}
        
        <nav className="w-full px-6 sm:px-8 lg:px-1 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center sm:jusitfy-start justify-center">

          <p style={{ display: 'none' }}>
            Working Holidays for Canadians are available from Global Village Work Learn Travel in a variety of international jobs and experiences.
          </p>

            <Link href="/">
              <Image
              src="/assets/GV-Work-Learn-Travel-Logo-Transparent.png"
              alt="GV Logo"
              width={974}
              height={213}
              className="h-16 w-auto object-contain"
              priority
            />
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
                      xmlns="http:/www.w3.org/2000/svg"
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
                  <div className="absolute top-full left-0 w-full bg-white-500 shadow-md z-20 text-center">
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
                  offset={-100}
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
                      xmlns="http:/www.w3.org/2000/svg"
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
                  // <div className="absolute top-full left-0 w-full bg-white-500 text-center shadow-md z-20">
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[270px] bg-white-500 shadow-md z-20 text-center">
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
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
            <ul className="flex w-full justify-between items-center text-black-500">
              {router.pathname === "/" ? (
                <>
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
                  xmlns="http:/www.w3.org/2000/svg"
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
                  xmlns="http:www.w3.org/2000/svg"
                  width="16" 
                  height="16" 
                  fill="currentColor" 
                  className="bi bi-backpack2 w-6 h-6" 
                  viewBox="0 0 16 16"
                >
                  <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14"/>
                  <path fillRule="evenodd" d="M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z"/>
                  <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v1.191l1.17.585a1.5 1.5 0 0 1 .83 1.342V13.5a1.5 1.5 0 0 1-1.5 1.5h-1c-.456.607-1.182 1-2 1h-7a2.5 2.5 0 0 1-2-1h-1A1.5 1.5 0 0 1 0 13.5v-2.382a1.5 1.5 0 0 1 .83-1.342L2 9.191V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0M3 13.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8A5 5 0 0 0 3 8zm-1-3.19-.724.362a.5.5 0 0 0-.276.447V13.5a.5.5 0 0 0 .5.5H2zm12 0V14h.5a.5.5 0 0 0 .5-.5v-2.382a.5.5 0 0 0-.276-.447L14 10.309Z"/>
                </svg>
                Experiences
              </LinkScroll>
              </>
              ) : (
                <>
                <Link
                  href="/"
                  className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                    (router.pathname === "/"
                      ? " border-orange-500 text-orange-500"
                      : " border-transparent")
                  }
                >
                  <svg
                    className="bi bi-house w-6 h-6"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http:/www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"
                    />
                  </svg>
                  Home Page
                </Link>
                <a
                  href="mailto:outbound@gvenglish.com"
                  className="mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all"
                >
                  <svg
                    className="bi bi-envelope w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    xmlns="http:/www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
                    />
                  </svg>
                  Contact Us
                </a>
              </>
            )}
              <Link
                href="/about"
                className="flex flex-col items-center justify-center px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-center"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http:/www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                About
              </Link>
            </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;