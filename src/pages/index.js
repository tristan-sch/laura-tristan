import Head from "next/head";
import Header from "../components/Header/header";
import Concept from "../components/concept";
// import About from "../components/About";
// import Team from "../components/Team";
// import Faq from "../components/Faq";
// import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <Head>
        <title>Laura &amp; Tristan</title>
        <link rel="icon" href="#" />
      </Head>
      <Header />
      <Concept />
      {/* <About
        menus={menus}
        settings={settings}
        about={about}
        services={services}
      />
      <Team menus={menus} team={team} staff={staff} faq={faq} />
      <Faq menus={menus} faq={faq} questions={questions} />
      <Contact menus={menus} contact={contact} /> */}
    </>
  );
};

export default Home;
