import { useEffect } from "react";
import Script from "next/script";
import "../styles/tailwind.css";
import "../styles/slick.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Define CRO configuration */}
      <Script id="cro-config" strategy="beforeInteractive">
        {`
          window.ER_CRO = {
            style: {
              background: "#F0A433",
              fontColor: "#000",
              hover: "#D88810",
            },
            menu: {
              phone: {
                url: "tel:4035437300",
              },
              tour: {
                label: "Book Consultation",
                url: "/book-consultation/?lead_src=cro_toolbar", 
                icon: JSON.stringify('<svg width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/></svg>'),
              },
              form: {
                url: "https://gtd-multistep-gve.virtualadviser.com/?lead_src=cro_toolbar", 
                label: "Get Info",
              },
              quiz: {
                url: "https://cr-gve.virtualadviser.com/?lead_src=cro_toolbar", 
                label: "Experience Quiz",
                icon: JSON.stringify('<svg width=1em height=1em fill=currentColor xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM105.8 229.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L216 328.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V314.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H158.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM160 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>')
              }
            }
          };
        `}
      </Script>
      
      {/* Load CRO script properly using Next.js Script component */}
      <Script 
        id="cro-script"
        src="https://assets.virtualadviser.com/cro.js" 
        strategy="afterInteractive"
      />
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;