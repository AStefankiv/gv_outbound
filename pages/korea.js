import Link from "next/link";
import { motion } from "framer-motion";

const KoreaPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-8 mb-6 px-6 sm:px-8 lg:px-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <Link href="/">
            <a className="text-lg font-semibold text-blue-500 hover:text-blue-600 transition-colors">
              Homepage
            </a>
          </Link>
        </div>
        <div>
          <Link href="/contact">
            <a className="text-lg font-semibold text-blue-500 hover:text-blue-600 transition-colors">
              Contact Us
            </a>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* TEACH ENGLISH Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/korea/teach_eng_korea_form">
            <a>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/teaching_button.jpg" // Replace with your actual image path
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
          className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
        >
          <Link href="/korea/k_internship_form">
            <a>
              <div className="relative h-0 pb-56">
                <img
                  src="/assets/internship_button.jpg" // Replace with your actual image path
                  alt="INTERNSHIP"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 flex items-center
              justify-center bg-black bg-opacity-50 text-white text-2xl
              font-bold" style={{color: "white"}}>
                INTERNSHIP
              </div>
            </a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default KoreaPage;
