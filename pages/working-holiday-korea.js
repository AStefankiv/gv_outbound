import Head from 'next/head';
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const KoreaPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">

      <Head>
        <title>Canadian Working Holiday in Korea | GV Work Learn Travel</title>
        <meta
          name="description"
          content="A Working Holiday in Korea available for Canadians looking for overseas experiences."
        />
        <meta name="keywords" content="Working Holiday in Korea" />
        <meta name="author" content="GVWLT" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://worklearntravel.ca/working-holiday-korea" />

        <link rel="apple-touch-icon" href="/public/favicon/GV-English-Favicon.ico" />

      </Head>

      <Header />

      <main className="flex-grow mt-24 mb-6 w-full">
        {/* Main Content Grid */}
        <div className="w-full mt-8 mb-6 px-4 sm:px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Section - Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-5xl font-bold mb-6 text-center">Working Holiday in Korea for Canadians</h1>
              <p className="text-xl leading-relaxed mb-4">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;South Korea is an exciting and dynamic destination for Canadians looking to embark on an overseas adventure. Known for its blend of modern innovation and deep-rooted traditions, a working holiday in Korea offers a unique cultural experience: from the neon-lit nightlife and K-pop culture of Seoul, to the serene temples and scenic mountains on the horizon, Korea has something for everyone. With a welcoming atmosphere, safe cities, and a strong sense of community, South Korea is an ideal destination for those wanting to work, travel, and experience life in one of Asia’s most fascinating countries.
              </p>
              <p className="text-xl leading-relaxed">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Korea offers the opportunity to experience rapid technological advancements while immersing yourself in a culture rich in history and tradition. Korea’s efficient public transportation and affordable cost of living make it easy to explore the entire country on a budget. Whether you’re interested in an internship with a Korean company or experiencing life as an English teacher, there are opportunities for all types.
              </p>
            </div>

            {/* Right Section - Links */}
            <div className="flex flex-col gap-4">

              {/* INTERNSHIP Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/working-holiday-korea/korea_internship" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/internship_button.jpg"
                    alt="INTERNSHIP"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
                    INTERNSHIPS
                  </div>
                </Link>
              </motion.div>
              
              {/* TEACH ENGLISH Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer w-full"
              >
                <Link href="/working-holiday-korea/teach_english_korea" className="relative h-0 pb-56 block">
                  <img
                    src="/assets/teach_korea.jpeg"
                    alt="TEACH ENGLISH"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-4xl font-bold text-outline-white text-center"
                    style={{ color: "rgba(241,163,52,255)" }}
                  >
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

export default KoreaPage;
