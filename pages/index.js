/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Footer from "../components/Footer";
import GlobalStyle from "../styles/globals";
import Landing from "../components/Landing";

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>
          الشاشة الذهبية | صيانة جوالات متنقلة في الرياض بأسعار منافسة
        </title>
        <meta
          name="description"
          content="صيانة جوالك في مكانك بأيدي محترفة واسعار منافسة وين ماكنت في الرياض"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="assets/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="assets/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="assets/favicon-16x16.png"
        />
        <link rel="manifest" href="assets/site.webmanifest" />
        <link
          rel="mask-icon"
          href="assets/safari-pinned-tab.svg"
          color="#E0AA3E"
        />
        <link rel="shortcut icon" href="assets/favicon.ico" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="msapplication-config" content="assets/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
      </Head>

      <main>
        <Landing />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
