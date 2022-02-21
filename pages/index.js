/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Footer from "../components/Footer";
import GlobalStyle from "../styles/globals";
import Landing from "./landing";

// TODO: Edit sitemap file to include domain
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
