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

  useEffect(() => {
    // Check if we're on the client-side and modify CRO config based on screen size
    if (typeof window !== 'undefined') {
      // Track previous state to avoid unnecessary reloads
      let previousIsMobile = null;

      // Define different configurations for mobile and desktop
      const desktopCroConfig = {
        style: {
          background: "#F0A433",
          fontColor: "#000",
          hover: "#D88810"
        },
        menu: {
          phone: {
            url: "tel:4035437300",
          },
          tour: {
            label: "Book Consultation",
            url: "/book-consultation/?lead_src=cro_toolbar", 
            icon: JSON.stringify('<svg width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/></svg>')
          },
          form: {
            url: "https://gtd-multistep-gve.virtualadviser.com/?lead_src=cro_toolbar", 
            label: "Get Info",
          },
          quiz: {
            url: "https://cr-gve.virtualadviser.com/?lead_src=cro_toolbar", 
            label: "Experience Quiz",
            icon: JSON.stringify('<svg width=1em height=1em fill=currentColor xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM105.8 229.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L216 328.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V314.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H158.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM160 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>'),
          },
        }
      };
      
      const mobileCroConfig = {
        style: {
          background: "#F0A433",
          fontColor: "#000",
          hover: "#D88810"
        },
        menu: {
          phone: {
            url: "tel:4035437300",
          },
          tour: {
            label: "Book Consultation",
            url: "/book-consultation/?lead_src=cro_toolbar",
            icon: JSON.stringify('<svg width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/></svg>')
          },
          form: {
            url: "https://gtd-multistep-gve.virtualadviser.com/?lead_src=cro_toolbar",
            label: "Get Info",
            icon: JSON.stringify('<svg width=1em height=1em fill=currentColor xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM105.8 229.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L216 328.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V314.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H158.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM160 416a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>'),
          },
          custom_item: {
            url: "/about/?lead_src=cro_toolbar",
            label: "About",
            icon: JSON.stringify('<svg class="bi bi-info-circle" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>')
          }
        }
      };
      
      // Function to apply the correct configuration based on screen width
      const applyCorrectConfig = () => {
        const isMobile = window.innerWidth < 640;
        
        // Only update if the state has changed (mobile to desktop or vice versa)
        if (previousIsMobile === null || previousIsMobile !== isMobile) {
          window.ER_CRO = isMobile ? mobileCroConfig : desktopCroConfig;
          previousIsMobile = isMobile;
          
          // Ensure the toolbar is removed before reinitializing
          const existingToolbar = document.querySelector('.er-toolbar');
          if (existingToolbar) {
            existingToolbar.remove();
          }
          
          // Reinitialize with a slight delay to ensure DOM operations complete
          setTimeout(() => {
            // Remove any existing CRO scripts to prevent duplicates
            const existingScripts = document.querySelectorAll('script[src="https://assets.virtualadviser.com/cro.js"]');
            existingScripts.forEach(script => script.remove());
            
            // Add new script
            const script = document.createElement('script');
            script.src = 'https://assets.virtualadviser.com/cro.js';
            document.body.appendChild(script);
          }, 50);
        }
      };
      
      // Initial application after a short delay to ensure DOM is ready
      setTimeout(applyCorrectConfig, 100);
      
      // Use throttled resize handler to avoid performance issues
      let resizeTimeout;
      const handleResize = () => {
        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }
        resizeTimeout = setTimeout(applyCorrectConfig, 250);
      };
      
      // Listen for window resize events
      window.addEventListener('resize', handleResize);
      
      // Cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
        if (resizeTimeout) {
          clearTimeout(resizeTimeout);
        }
      };
    }
  }, []);

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
      
      {/* Base CRO configuration that will be replaced by the responsive version */}
      <Script id="cro-config" strategy="beforeInteractive">
        {`
          // Initial empty configuration that will be replaced
          window.ER_CRO = {};
        `}
      </Script>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;