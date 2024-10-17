import React from "react";
import LogoGV from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-6 pb-4 sm:pb-1">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-5 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-12 gap-0">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoGV className="h-16 w-auto" />
          <p className="mb-4">
            <strong className="font-bold">WORK LEARN TRAVEL</strong> HELPS CANADIAN CITIZENS AGED 18 TO 35 TO WORK AND TRAVEL AROUND THE WORLD.
          </p>
          <div className="flex w-full mt-2 mb-4 sm:mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md transition-transform transform hover:scale-110">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md transition-transform transform hover:scale-110">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md transition-transform transform hover:scale-110">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Work - learn - travel</p>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-13 flex flex-col">
          <ul className="text-black-500">
            <li className="my-5 hover:text-orange-500 cursor-pointer transition-all">
              <a href="mailto:outbound@gvenglish.com">Contact us</a>
            </li>
            <li className="my-5 hover:text-orange-500 cursor-pointer transition-all">
              {/* About Us */}
              <Link href="/about" target="_blank" rel="noopener noreferrer">About Us</Link>
            </li>
            <li className="my-5 hover:text-orange-500 cursor-pointer transition-all">
              <a href="https://gvenglish.com/" rel="noopener noreferrer">
                Global Village
              </a>
            </li>
            <li className="my-5 hover:text-orange-500 cursor-pointer transition-all">
              <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/canadians/international-experience-canada.html" target="_blank" rel="noopener noreferrer">
              International Experience Canada
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;