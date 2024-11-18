import Head from "next/head";
import { useRouter } from "next/router";
import Script from 'next/script'; // Import the Script component
import gv_image from '../public/assets/gv_square.png';

const defaultMeta = {
  title: 'Working Holiday for Canadians | GV Work Learn Travel',
  siteName: 'Work learn travel',
  description: 'Working Holidays for Canadians are available from Global Village Work Learn Travel in a variety of international jobs and experiences.',
  url: 'https://www.worklearntravel.ca/',
  type: 'website',
  keywords: 'Working Holiday for Canadians',
  image: gv_image,
  author: 'GVWLT'
};

const SeoHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props
  };

  // Use siteName if there is templateTitle, but show full title if there is none
  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="author" content={meta.author} />
        <meta property='og:url' content={`${meta.url}${router.asPath}`} />
        <meta property='og:image' content='/assets/gv_square.png' />
        <link rel='canonical' href={`${meta.url}${router.asPath}`} />

        {/* Open Graph */}
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content={meta.siteName} />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta name='image' property='og:image' content='https:/github.com/AStefankiv/gv_outbound/blob/main/public/assets/gv_square.png?raw=true' />

        {/* Twitter */}
        <meta name='twitter:card' content={meta.image} />
        <meta name='twitter:site' content='@F2aldi' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />

        {meta.date && (
          <>
            <meta property='article:published_time' content={meta.date} />
            <meta
              name='publish_date'
              property='og:publish_date'
              content={meta.date}
            />
            <meta
              name='author'
              property='article:author'
              content={meta.author}
            />
          </>
        )}

        {/* Favicons */}
        {favicons.map((linkProps) => (
          <link key={linkProps.href} {...linkProps} />
        ))}

        {/* Windows 8 app icon */}
        <meta name='msapplication-TileColor' content='#F53838' />
        <meta
          name='msapplication-TileImage'
          content='/favicon/ms-icon-144x144.png'
        />

        {/* Accent color on supported browser */}
        <meta name='theme-color' content='#F53838' />
      </Head>

      {/* Google Analytics */}
      <Script
        src="https:/www.googletagmanager.com/gtag/js?id=G-E92RJLF7EE"
        strategy="afterInteractive"
      />

      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-E92RJLF7EE');
        `}
      </Script>

      {/* HubSpot Script using next/script */}
      <Script
        id="hs-script-loader"
        src="/js.hs-scripts.com/7792441.js"
        strategy="afterInteractive"
      />

            {/* Facebook Pixel Code */}
            <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https:/connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1111232897010087');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
};

// Favicons, other icons, and manifest definition
const favicons = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/favicon/apple-icon-57x57.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/favicon/apple-icon-60x60.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/favicon/apple-icon-72x72.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicon/apple-icon-76x76.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/favicon/apple-icon-114x114.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/favicon/apple-icon-120x120.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicon/apple-icon-144x144.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/favicon/apple-icon-152x152.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-icon-180x180.png',
  },
  {
    rel: 'mask-icon',
    href: '/favicon/apple-icon-180x180.png',
    color: '#F59A9A',
  },
  {
    rel: 'icon',
    href: '/favicon/favicon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/public/favicon/favicon-16x16.png',
  },
  // {
  //   rel: 'icon',
  //   type: 'image/png',
  //   sizes: '32x32',
  //   href: '/favicon/favicon-32x32.png',
  // },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/favicon-96x96.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-icon-192x192.png',
  },
  {
    rel: 'manifest',
    href: '/public/favicon/favicon-16x16.png',
  },
];

export default SeoHead;