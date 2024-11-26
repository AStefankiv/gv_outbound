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
          <link rel="preconnect" href="https:fonts.gstatic.com" />
          <link
            href="https:fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
            rel="stylesheet"
          />
          <link
            rel="GV-English-Favicon"
            sizes="128x128"
            href="/favicon/GV-English-Favicon.ico"
          />
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