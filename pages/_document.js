import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <meta name="google-site-verification" content="VFFgT-PM8jIPuqmTmqZEQnulyiKpKmALnTWO2KUAvcg" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/x-icon"
            href="/favicon/GV-English-Favicon.ico"
            sizes="16x16 32x32 48x48"
          />
          <meta name="apple-mobile-web-app-title" content="Work Learn Travel" />
        </Head>
        <body>
          {/* Facebook Pixel Noscript */}
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https:www.facebook.com/tr?id=1111232897010087&ev=PageView&noscript=1"
              alt="facebook pixel"
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;