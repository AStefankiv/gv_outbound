import Link from "next/link";
import { motion } from "framer-motion";
import LogoGV from "../public/assets/Logo.svg";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const KoreaPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow mt-24 mb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto mt-8 mb-6 px-6 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* TEACH ENGLISH Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
            >
              <Link href="/korea/teach_eng_korea_form">
                <a>
                  <div className="relative h-0 pb-56">
                    <img
                      src="/assets/teaching_button.jpg"
                      alt="TEACH ENGLISH"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold" style={{color: "white"}}>
                    TEACH ENGLISH
                  </div>
                </a>
              </Link>
            </motion.div>

            {/* INTERNSHIP Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
            >
              <Link href="/korea/k_internship_form">
                <a>
                  <div className="relative h-0 pb-56">
                    <img
                      src="/assets/internship_button.jpg"
                      alt="INTERNSHIP"
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl font-bold" style={{color: "white"}}>
                    INTERNSHIP
                  </div>
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KoreaPage;