import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-grow mt-24 mb-6 w-full">
        <div className="w-full mt-8 mb-6 px-4 sm:px-4 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Our team at <strong>Work Learn Travel</strong> has been enabling international experiences for more than two decades. 
                As official partners of <strong>International Experience Canada</strong>, we’re dedicated to creating life-changing 
                opportunities for Canadians as they work, learn, and travel all over our amazing world.
              </p>
              <p className="text-lg mb-6">
                For more information, feel free to reach out to us.
              </p>
              <a 
                // href="mailto:gvoutbound@gvenglish.com"
                href="mailto:stefankif35@gmail.com"
                className="inline-block bg-orange-500 text-white font-semibold py-2 px-6 rounded hover:bg-orange-600 transition duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;