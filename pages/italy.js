import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const ItalyPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main className="flex-grow mt-24 mb-6 w-full">
        {/* Main Content Grid */}
        <div className="w-full mt-8 mb-6 px-4 sm:px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Section - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6 text-center">Experience Italy</h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Italy, a vibrant country rich in history, culture, and culinary delights, is a dream destination for Canadians considering an overseas experience. With its iconic cities like Rome, Florence, Venice, and Milan, Italy offers a unique blend of ancient heritage and modern urban life. Italy provides not only the opportunity to explore stunning architecture and art but also the chance to live and work in a country known for its strong sense of community and passion for "la dolce vita" (the sweet life). 
              </p>
              <p className="text-xl leading-relaxed">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What sets Italy apart as a working holiday destination is its deep connection to art, food, and tradition. Imagine visiting world-famous museums or sipping espresso in charming piazzas, after a morning working with an Italian family as a tutor.
              </p>
              <p className="text-xl leading-relaxed">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Choosing Italy means more than just a job abroad; it's an immersive cultural experience where you can learn a beautiful language, savor some of the best cuisine in the world, and embrace a slower-paced, fulfilling way of life. Whether you're seeking adventure or a deeper connection to history and tradition, Italy offers an unforgettable experience.
              </p>
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-col gap-4 justify-center items-center">
              
              {/* LANGUAGE ASSISTANT Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/italy/teach_aliore_italy" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/teaching_button.jpg"
                    alt="TEACH IN ITALY"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-center" style={{ color: "rgba(241,163,52,255)" }}>
                    LANGUAGE ASSISTANT
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

export default ItalyPage;
