import React from "react";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-2 pb-4 sm:pb-1">
      <div className="max-w-screen-2xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-5 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-12 gap-0">
        <div className="row-span-2 sm:col-span-5 col-start-2 col-end-4 sm:col-end-6 flex flex-col items-start ">
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
          <p className="mb-4">
            <strong className="font-bold">GV WORK LEARN TRAVEL</strong> helps Canadian citizens aged 18 to 35 to work and travel around the world.
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
          <p className="text-gray-400">©{new Date().getFullYear()} - 734 7 Avenue SW ( Suite 360 ) Calgary, AB T2P 3P8</p>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-13 flex flex-col">
          <ul className="text-black-500">
            <li className="my-5 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="/about" rel="noopener noreferrer">About Us</Link>
            </li>
            <li className="my-5 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="/apply-online" rel="noopener noreferrer">Apply Online</Link>
            </li>
            <li className="my-5 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="/book-consultation" rel="noopener noreferrer">Book a Consultation</Link>
            </li>
            <li className="my-5 hover:text-orange-500 cursor-pointer transition-all">
              <a href="mailto:outbound@gvenglish.com">Contact us</a>
            </li>
            <li className="my-5 hover:text-orange-500 cursor-pointer transition-all">
              <a href="https://gvenglish.com/" rel="noopener noreferrer">
                Global Village English
              </a>
            </li>
            <li className="my-5 hover:text-orange-500 cursor-pointer transition-all">
              <a href="https://canada.ca/en/immigration-refugees-citizenship/services/canadians/international-experience-canada.html" rel="noopener noreferrer">
              International Experience Canada
              </a>
            </li>
            <li className="my-5 hover:text-orange-500 cursor-pointer transition-all">
              <Link href="/partnership" rel="noopener noreferrer">
                Become a GV Work Learn Travel partner
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;