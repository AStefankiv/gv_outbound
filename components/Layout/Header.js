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

    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hiddenPaths = [
    "/teach_eng_japan_form",
    "/korea",
    "/korea/teach_eng_korea_form",
    "/korea/k_internship_form",
    "/about",
    "/france",
    "/france/teach_aliore_france",
    "/italy",
    "/italy/teach_aliore_italy",
    "/costa_rica",
    "/costa_rica/teaching_mareas",
    "/costa_rica/green_life_community",
    "/costa_rica/green_life_conservation",
    "/spain",
    "/spain/language_assistant_aliore_spain",
    "/spain/spain_internship",
    "/global_sailing",
    "/global_sailing/sail_croatia",
  ];

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
            <div>
              <Link href="/">
                <LogoGV className="h-16 w-auto" />
              </Link>
            </div>
            <div className="hidden sm:block">
              <Link
                href='/about'
                className={"text-lg px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative font-bold text-center ml-20"}>
                About
              </Link>
            </div>
          </div>

          {!hideLinks && (
            <ul className="hidden lg:flex col-start-13 col-end-13 text-black-500 items-center"> {/* col-start-4 col-end-4 */}
              <LinkScroll
                activeClass="active"
                to="emptyComponent" // Updated to match the EmptyComponent ID
                spy={true}
                smooth={true}
                duration={1000}
                // offset={-100}
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

              <LinkScroll
                activeClass="active"
                to="experiences"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}
                onSetActive={() => {
                  setActiveLink("experiences");
                }}
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

              {/* <LinkScroll
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("about");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer font-bold animation-hover inline-block relative" +
                  (activeLink === "about"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500")
                }
              >
                About
              </LinkScroll> */}

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
                <div className="flex flex-col items-center justify-center">
                  Contact Us
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
                onSetActive={() => {
                  setActiveLink("experiences");
                }}
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
                    strokeWidth={2}
                    d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
                  />
                </svg>
                Experiences
              </LinkScroll>

              <Link
                href='/about'
                className={"flex flex-col items-center justify-center px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative font-bold text-center"}>
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
{/* 
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
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs font-bold border-t-2 transition-all " +
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
              </LinkScroll> */}

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
                    strokeWidth={1}
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
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