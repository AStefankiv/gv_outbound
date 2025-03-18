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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.asPath]);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        {/* CTA Section - hidden on mobile */}
        <div
          id="cta-big"
          className="hidden sm:flex justify-end items-center sm:flex-row flex-col text-center sm:text-right"
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
        
        <nav className="w-full px-6 sm:px-8 lg:px-1 mx-auto py-3 sm:py-4">
          <div className="flex items-center justify-between w-full relative">
            {/* Hidden SEO text */}
            <p style={{ display: 'none' }}>
              Working Holidays for Canadians are available from Global Village Work Learn Travel in a variety of international jobs and experiences.
            </p>

            {/* Logo container with improved mobile centering */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-full flex justify-center lg:w-auto lg:static lg:transform-none lg:left-0 lg:pl-4 lg:pr-4 flex items-center">
              <Link href="/" className="flex-shrink-0 lg:mx-0 lg:pl-8 lg:pr-12 flex items-center">
                <Image
                  src="/assets/GV-Work-Learn-Travel-Logo-Transparent.png"
                  alt="GV Logo"
                  width={974}
                  height={213}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </Link>
            </div>
            
            {/* Left side navigation - with vertical centering and responsive sizing */}
            <div className="invisible lg:visible lg:flex-1 lg:flex lg:items-center">
              <div className="hidden lg:flex lg:items-center lg:space-x-2 xl:space-x-4 2xl:space-x-6">
                <Link
                  href="/about"
                  className="text-sm lg:text-base xl:text-lg px-1 lg:px-1 xl:px-2 py-2 cursor-pointer animation-hover inline-block relative font-bold text-center whitespace-nowrap"
                >
                  About
                </Link>
                <Link
                  href="/apply-online"
                  className="text-sm lg:text-base xl:text-lg px-1 lg:px-1 xl:px-2 py-2 cursor-pointer animation-hover inline-block relative font-bold text-center whitespace-nowrap"
                >
                  Apply Online
                </Link>
                <Link
                  href="/book-consultation"
                  className="text-sm lg:text-base xl:text-lg px-1 lg:px-1 xl:px-2 py-2 cursor-pointer animation-hover inline-block relative font-bold text-center whitespace-nowrap"
                >
                  <span className="hidden xl:inline">Book a Consultation</span>
                  <span className="inline xl:hidden">Book Call</span>
                </Link>
                <a
                  href="mailto:outbound@gvenglish.com"
                  className="text-sm lg:text-base xl:text-lg px-1 lg:px-1 xl:px-2 py-2 cursor-pointer animation-hover inline-block relative font-bold text-center whitespace-nowrap"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Right side - hamburger menu on mobile, dropdowns on desktop */}
            <div className="flex items-center z-10">
              {/* Hamburger menu button positioned absolutely */}
              <button 
                onClick={toggleMobileMenu} 
                className="lg:hidden flex items-center p-2 rounded-md z-10"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>

              {/* Desktop dropdown menus with responsive sizing */}
              <ul className="hidden lg:flex lg:items-center text-black-500">
                <div
                  onMouseEnter={() => setShowDestinationsDropdown(true)}
                  onMouseLeave={() => setShowDestinationsDropdown(false)}
                  className="relative mx-2 lg:mx-3 xl:mx-4"
                >
                  <LinkScroll
                    activeClass="active"
                    to="emptyComponent"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className={
                      "text-sm lg:text-base xl:text-lg px-1 lg:px-2 xl:px-4 py-2 cursor-pointer animation-hover inline-block relative" +
                      (activeLink === "countryLinks"
                        ? " text-orange-500 animation-active "
                        : " text-black-500 hover:text-orange-500")
                    }
                  >
                    <div className="flex flex-col items-center justify-center">
                      Destinations
                      <svg
                        className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 mt-[-4px] mb-[-8px] xl:mt-[-5px] xl:mb-[-10px]"
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

                <div
                  onMouseEnter={() => setShowExperiencesDropdown(true)}
                  onMouseLeave={() => setShowExperiencesDropdown(false)}
                  className="relative mx-2 lg:mx-3 xl:mx-4"
                >
                  <LinkScroll
                    activeClass="active"
                    to="experiences"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    offset={-100}
                    className={
                      "text-sm lg:text-base xl:text-lg px-1 lg:px-2 xl:px-4 py-2 cursor-pointer animation-hover inline-block relative" +
                      (activeLink === "experiences"
                        ? " text-orange-500 animation-active "
                        : " text-black-500 hover:text-orange-500")
                    }
                  >
                    <div className="flex flex-col items-center justify-center">
                      Experiences
                      <svg
                        className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 mt-[-4px] mb-[-8px] xl:mt-[-5px] xl:mb-[-10px]"
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
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white-500 w-full shadow-lg z-20">
            <div className="px-4 py-2">
              <Link 
                href="/about"
                className="block py-2 text-black-500 font-medium hover:text-orange-500"
              >
                About
              </Link>
              <Link 
                href="/apply-online"
                className="block py-2 text-black-500 font-medium hover:text-orange-500"
              >
                Apply Online
              </Link>
              <Link 
                href="/book-consultation"
                className="block py-2 text-black-500 font-medium hover:text-orange-500"
              >
                Book a Consultation
              </Link>
              <a 
                href="mailto:outbound@gvenglish.com"
                className="block py-2 text-black-500 font-medium hover:text-orange-500"
              >
                Contact
              </a>

              {/* Mobile dropdown sections - moved before CTA */}
              <div className="py-2 border-t border-gray-200 mt-2">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer py-2 list-none">
                    <span>Destinations</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="text-neutral-600 mt-2 ml-4 group-open:animate-fadeIn">
                    {dropDownCountries.map((country, index) => (
                      <Link key={index} href={country.link}>
                        <div className="py-2 hover:text-orange-500">{country.name}</div>
                      </Link>
                    ))}
                  </div>
                </details>
                
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer py-2 list-none">
                    <span>Experiences</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="text-neutral-600 mt-2 ml-4 group-open:animate-fadeIn">
                    {dropDownExperiences.map((experience, index) => (
                      <Link key={index} href={experience.link}>
                        <div className="py-2 hover:text-orange-500">{experience.name}</div>
                      </Link>
                    ))}
                  </div>
                </details>
              </div>
              
              {/* CTA Quiz button moved to appear after dropdowns */}
              <div className="py-3 mt-2 border-t border-gray-200">
                <p className="font-medium py-1">Is Travel/Work Experience Right For You?</p>
                <a
                  href="https://cr-gve.virtualadviser.com/?lead_src=w-header"
                  className="block mt-2 py-2 px-3 text-center text-black-900 font-semibold rounded-lg bg-orange-500 transition-all outline-none hover:shadow-dark-grey-lg"
                >
                  Take the Free Quiz
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;