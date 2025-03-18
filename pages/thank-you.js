import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { useEffect } from "react";

const ThankYou = () => {
  // Load Google Tag Manager
  useEffect(() => {
    const gtagScript = document.createElement("script");
    gtagScript.async = true;
    gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-16884794738";
    document.head.appendChild(gtagScript);

    gtagScript.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "AW-16884794738");
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Head>
        <title>Thank You | Global Village Work Learn Travel</title>
        <meta
          name="description"
          content="Thank you for your interest in Global Village English. An advisor will be in contact with you shortly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />
      <main className="flex-grow mt-40 mb-6 w-full">
        <div className="w-full max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg p-8 text-center">
            <h1 className="text-4xl font-bold mb-6" style={{ color: "#F0A434" }}>Thank You!</h1>
            
            <p className="text-xl mb-4">
              Thank you for your interest in Global Village English, and congratulations on taking the first step towards a bright future!
            </p>
            
            <p className="text-xl mb-4">
              Your request for information has been received. A friendly International Experience Advisor will be in contact with you shortly.
            </p>
            
            <p className="text-xl mb-6">
              Your International Experience Advisor will reach out by phone and email to answer any questions you have and will help you explore your options to determine the right travel/work experience for you.
            </p>
            
            <div className="border-t border-gray-300 pt-6 mt-6">
              <p className="text-lg">
                For immediate questions, email <a href="mailto:outbound@gvenglish.com" className="font-bold hover:underline" style={{ color: "#F0A434" }}>outbound@gvenglish.com</a> or call GV Calgary at <span className="font-bold">403 543-7300</span>
              </p>
            </div>
            
            <div className="mt-8">
              <Link href="/" className="text-white px-6 py-3 rounded-lg transition-colors" style={{ backgroundColor: "#F0A434", hover: { backgroundColor: "#d89129" } }}>
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
