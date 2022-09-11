import Head from "next/head";
import Header from "../components/Header/header";
import Programme from "../components/programme";
import Lieu from "../components/lieu";
import Team from "../components/team";
import Faq from "../components/faq";
import Contact from "../components/contact";
import Favicon from "../../public/favicon.ico";

const Home = () => {
  return (
    <>
      <Head>
        <title>Laura &amp; Tristan</title>
        <link rel="icon" href={Favicon.src} />
      </Head>
      <Header />
      <Programme />
      <Lieu />
      <Team />
      <Faq />
      <Contact />
    </>
  );
};

export default Home;
