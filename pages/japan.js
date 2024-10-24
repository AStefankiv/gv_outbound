import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const JapanPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main className="flex-grow mt-24 mb-6 w-full">
        {/* Main Content Grid */}
        <div className="w-full mt-8 mb-6 px-4 sm:px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Section - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6 text-center">Experience Japan</h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Japan is an exciting and dynamic destination for Canadians looking to embark on an overseas adventure. --------------------------------------------------------------------------------------------------------- from the neon-lit nightlife and K-pop culture of Seoul, to the serene temples and scenic mountains on the horizon, Korea has something for everyone. With a welcoming atmosphere, safe cities, and a strong sense of community, South Korea is an ideal destination for those wanting to work, travel, and experience life in one of Asia’s most fascinating countries.
              </p>
              <p className="text-xl leading-relaxed">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Japan offers the opportunity to experience rapid technological advancements while immersing yourself -------------------------------------------------------------------------------------------------------------- make it easy to explore the entire country on a budget. Whether you’re interested in an internship with a Korean company or experiencing life as an English teacher, there are opportunities for all types.
              </p>
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-col gap-4">

              {/* INTERNSHIP Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/japan/j_internship_form" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/internship_button.jpg"
                    alt="INTERNSHIP"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold" style={{ color: "rgba(241,163,52,255)" }}>
                    INTERNSHIPS
                  </div>
                </Link>
              </motion.div>
              
              {/* TEACH ENGLISH Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/japan/teach_eng_japan_form" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/teaching_button.jpg"
                    alt="TEACH ENGLISH"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold" style={{ color: "rgba(241,163,52,255)" }}>
                    TEACH ENGLISH
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

export default JapanPage;