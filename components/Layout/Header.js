import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Link as LinkScroll } from "react-scroll";
import LogoGV from "../../public/assets/Logo.svg";
import Link from "next/link";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hiddenPaths = [
    "/teach_eng_japan_form",
    "/korea",
    "/korea/teach_eng_korea_form",
    "/korea/k_internship_form"
  ];

  // Check if the current path is '/teach_eng_japan_form'
  const hideLinks = hiddenPaths.includes(router.pathname);

  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="w-full px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4"> {/* was: max-w-screen-xl */}
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href="/">
              <LogoGV className="h-16 w-auto" />
            </Link>
          </div>
          {!hideLinks && (
            <ul className="hidden lg:flex col-start-13 col-end-13 text-black-500 items-center"> {/* col-start-4 col-end-4 */}
              <LinkScroll
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("about");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "about"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500")
                }
              >
                About
              </LinkScroll>

              <LinkScroll
                activeClass="active"
                to="countryLinks"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}
                onSetActive={() => {
                  setActiveLink("countryLinks");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "countryLinks"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500")
                }
              >
                Destinations
              </LinkScroll>

              <LinkScroll
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-300}
                onSetActive={() => {
                  setActiveLink("contact");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "contact"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500")
                }
              >
                Contact Us
              </LinkScroll>

              {/* Add other links if necessary */}
            </ul>
          )}
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            {/* Add other buttons or links here */}
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          {!hideLinks && (
          <ul className="flex w-full justify-between items-center text-black-500">
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
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
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="countryLinks"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-100}
              onSetActive={() => {
                setActiveLink("countryLinks");
              }}
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
                  strokeWidth={2}
                  d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
                />
              </svg>
              Destinations
            </LinkScroll>

            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("contact");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "contact"
                  ? " border-orange-500 text-orange-500"
                  : " border-transparent ")
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
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Contact Us
            </LinkScroll>
            {/* Add other mobile links if necessary */}
          </ul>
          )}
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;