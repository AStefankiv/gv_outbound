import { useEffect } from "react";
import Script from "next/script";
import "../styles/tailwind.css";
import "../styles/slick.css";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag() {
  //     window.dataLayer.push(arguments);
  //   }
  //   gtag("js", new Date());
  //   gtag("config", "AW-16884794738");
  // }, []);

  return (
    <>
      {/* Load Google Tag Manager */}
      {/* <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16884794738"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16884794738');
        `}
      </Script> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;