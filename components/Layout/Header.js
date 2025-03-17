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
          <div className="col-start-1 col-end-2 flex items-center sm:justify-start justify-center">

            <p style={{ display: 'none' }}>
              Working Holidays for Canadians are available from Global Village Work Learn Travel in a variety of international jobs and experiences.
            </p>

            {/* Added more left padding to the logo */}
            <Link href="/" className="flex-shrink-0 mr-4 pl-4 sm:pl-6 lg:pl-8">
              <Image
                src="/assets/GV-Work-Learn-Travel-Logo-Transparent.png"
                alt="GV Logo"
                width={974}
                height={213}
                className="h-16 w-auto object-contain"
                priority
              />
            </Link>
            
            {/* Improved responsive navigation */}
            <div className="hidden sm:flex space-x-2 md:space-x-4 lg:space-x-6">
              <Link
                href="/about"
                className="text-base md:text-lg px-2 py-2 cursor-pointer animation-hover inline-block relative font-bold text-center whitespace-nowrap"
              >
                About
              </Link>
            
              <Link
                href="/book-consultation"
                className="text-base md:text-lg px-2 py-2 cursor-pointer animation-hover inline-block relative font-bold text-center whitespace-nowrap"
              >
                <span className="hidden md:inline">Book a Consultation</span>
                <span className="inline md:hidden">Book Call</span>
              </Link>
            
              <a
                href="mailto:outbound@gvenglish.com"
                className="text-base md:text-lg px-2 py-2 cursor-pointer animation-hover inline-block relative font-bold text-center whitespace-nowrap"
              >
                Contact
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
    </>
  );
};

export default Header;