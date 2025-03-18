import Head from "next/head";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { useEffect } from "react";

const BookConsultation = () => {
  // Use useEffect to inject the script client-side only
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = "https://assets.virtualadviser.com/embed.js";
    script.async = true;
    
    // Append the script to the body
    document.body.appendChild(script);
    
    // Clean up function
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Head>
        <title>Book a Consultation | Global Village Work Learn Travel</title>
        <meta name="description" content="Book a consultation with our team to discuss your international experience options" />
      </Head>

      <Header />
      <main className="flex-grow mb-6 w-full">
        <div className="pt-20 sm:pt-40 md:pt-48 lg:pt-44">
          <div className="container mx-auto px-4 sm:px-4 lg:px-12">
            <h1 className="text-3xl font-bold text-center mt-10 sm:mt-8 mb-8">Book an Online Consultation</h1>
            <div className="booking-container">
              <div className="va-embed" data-src="https://book-a-tour-gve.virtualadviser.com"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookConsultation;
