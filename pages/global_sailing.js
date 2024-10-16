import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const GlobalSailing = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main className="flex-grow mt-24 mb-6 w-full">
        {/* Main Content Grid */}
        <div className="w-full mt-8 mb-6 px-4 sm:px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Section - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6 text-center">Experience Global Sailing</h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Becoming a yacht crew member is an exciting and unique career path that offers Canadians a chance to explore the world while working on luxury vessels. For those looking for overseas experiences, the yacht industry provides a gateway to adventure, professional growth, and cultural immersion. Plus, working on a yacht provides remarkable networking, and fosters teamwork, discipline, and responsibility: skills that are transferable to future work in almost any industry. Whether you’re seeking a temporary job or a long-term career, working as a yacht crew member is both challenging and rewarding. 
              </p>
              <p className="text-xl leading-relaxed">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Yachts frequently sail to exotic coastal destinations such as the Mediterranean, Caribbean, and South Pacific, allowing crew members to experience different cultures and environments. Living and working on a yacht means you’re always on the move, which adds an element of excitement to everyday life. For adventure-seekers, there’s no better office than the open ocean.
              </p>
              <p className="text-xl leading-relaxed mt-3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We offer comprehensive training to prepare you for your role onboard, including technical and social skills that will help you connect with teammates and guests alike. This training will stand you in good stead as you look ahead: many crew members start in entry-level positions like deckhand or steward, but with the right qualifications and experience, you can work your way up to senior roles like chief stewardess, chef, or even captain.
              </p>
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-col gap-4 justify-center items-center">
              
              {/* YACHT CREW Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/global_sailing/sail_croatia"
                className="relative h-0 pb-56 block"
                >
                  <picture className="absolute inset-0 w-full h-full">
                  <source
                    srcSet="/assets/yacht-desktop.jpeg"
                    media="(min-width: 1024px)"
                  />
                  <img
                    src="/assets/yacht-mobile.jpeg"
                    alt="TEACH IN FRANCE"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  </picture>
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    YACHT CREW
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

export default GlobalSailing;