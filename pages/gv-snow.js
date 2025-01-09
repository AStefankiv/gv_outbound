import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const GV_Snow = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">

      <Head>
        <title>Work Overseas as a Ski Instructor | GV WLT</title>
        <meta
          name="description"
          content="Canadian looking for overseas work as a ski instructor? We can help you find the perfect experience!"
        />
        <meta name="keywords" content="Skiing Working Holiday" />
        <meta name="author" content="GVWLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://worklearntravel.ca/gv-snow" />
      </Head>

      <Header />

      <main className="flex-grow mt-24 mb-6 w-full">
        {/* Main Content Grid */}
        <div className="w-full mt-8 mb-6 px-4 sm:px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Section - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6 text-center">GV Snow</h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GV SNOW provides work placements for certified ski and snowboard instructors in beautiful destinations around the world. Each option is a world-class ski destination, and each offers unique benefits. Click through to see the opportunities, requirements, and inclusions/exclusions of the programs in each area. All placements include job guarantees, assistance with accommodation, and opportunities for further education, along with the cultural experiences each country offers.
              </p>
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-col gap-4">

              {/* GV SNOW - Spain */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/gv-snow/gv-snow-spain" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/ski-spain.jpg"
                    alt="SKI-SPAIN"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    GV SNOW - Spain
                  </div>
                </Link>
              </motion.div>

              {/* GV SNOW - Japan */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/gv-snow/gv-snow-japan" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/ski-japan.jpg"
                    alt="SKI_JAPAN"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    GV SNOW - Japan
                  </div>
                </Link>
              </motion.div>
              
              {/* GV SNOW - Switzerland */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/gv-snow/cgv-snow-switzerland" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/ski-switzerland.jpg"
                    alt="SKI-SWITZERLAND"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    GV SNOW - Switzerland
                  </div>
                </Link>
              </motion.div>

              {/* GV SNOW - Austria */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/gv-snow/gv-snow-austria" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/ski-austria.jpeg"
                    alt="SKI-AUSTRIA"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    GV SNOW - Austria
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

export default GV_Snow;
