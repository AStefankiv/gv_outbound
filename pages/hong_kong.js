import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const HongKong = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main className="flex-grow mt-24 mb-6 w-full">
        {/* Main Content Grid */}
        <div className="w-full mt-8 mb-6 px-4 sm:px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Section - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6 text-center">Experience Hong Kong</h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hong Kong: a world-class city that brings together East and West like no other. With its towering skyscrapers, bustling streets, and rich cultural heritage, Hong Kong provides a vibrant urban experience while still offering natural beauty with its scenic hiking trails and meandering coastlines. 
              </p>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;One of the biggest draws of Hong Kong is its international job market and strong economy. As a global financial hub, the city offers numerous opportunities in sectors like finance, tech, and hospitality. English is widely spoken in the workplace, making it easier for Canadians to integrate, and Hong Kong has a strong expat community, so it’s easy to connect with other travelers and professionals.
              </p>
              <p className="text-xl leading-relaxed">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For those interested in culture, Hong Kong has a unique mix of Chinese traditions and colonial British influences, offering endless festivals, temples, markets, and culinary experiences to explore. Its location also makes it a gateway to Asia, with quick flights to destinations like Japan, Thailand, and mainland China.
              </p>
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-col gap-4 justify-center items-center">
              
              {/*  INTERNSHIP Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/hong_kong/hong_kong_internship" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/hongkong_internship.jpg"
                    alt=" INTERNSHIP In HONG KONG"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    INTERNSHIP
                  </div>
                </Link>
              </motion.div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HongKong;