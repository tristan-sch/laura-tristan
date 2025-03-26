import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import Nav from "../Nav/nav";
import hero from "../../../public/optimized-images/hero.png";
import ChevronDown from "../../../public/chevronDown.svg";

const Countdown = dynamic(() => import("../Header/countdown"), {
  ssr: false,
});

const Hero = tw.div`relative`;
const Container = tw.div`flex justify-between items-center max-w-screen-xl mx-auto  pb-20`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto pt-20`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;
const Heading = tw.h1`font-primary text-3xl md:text-5xl leading-snug max-w-3xl`;
const HighlightedText = tw.span`text-primary`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base text-gray-600 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary text-gray-100 hocus:bg-gray-900 focus:shadow-outline focus:outline-none transition duration-300`;
const SecondaryButton = tw.button`font-primary text-xl mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary transition duration-300 hocus:text-primary focus:outline-none`;
const PlayText = tw.span`ml-2 font-medium text-primary`;

const IllustrationContainer = tw.div`hidden sm:flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

const Header = () => {
  return (
    <Hero>
      <Container>
        <div>
          <Nav />
          <TwoColumn>
            <LeftColumn>
              <Countdown />
              <Heading>
                Bienvenue au mariage de <br />
                <HighlightedText>Laura &amp; Tristan</HighlightedText>
              </Heading>
              <Paragraph>
                Nous célébrons notre mariage le weekend du <b>27 mai 2023</b>.
                Un hôtel sera privatisé du vendredi au dimanche. Vous trouverez
                sur ce site toutes les informations pratiques.
              </Paragraph>
              <Actions>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScv-2HooO284Hh8M0sPOhduniz9hg4_kwxmcdk7FVxeKP4hHg/formResponse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PrimaryButton>RSVP</PrimaryButton>
                </a>
                <SecondaryButton>
                  <Image
                    src={ChevronDown}
                    alt="Chevron Down Icon"
                    width={18}
                    height={18}
                    loading="lazy"
                    // unoptimized={true}
                  />
                  <Link href="#programme">
                    <PlayText>C&#39; est parti</PlayText>
                  </Link>
                </SecondaryButton>
              </Actions>
            </LeftColumn>
            <RightColumn>
              <IllustrationContainer>
                <Image
                  alt="Hero image"
                  src={hero}
                  width={768}
                  height={512}
                  loading="lazy"
                  unoptimized={true}
                />
              </IllustrationContainer>
            </RightColumn>
          </TwoColumn>
        </div>
      </Container>
    </Hero>
  );
};

export default Header;
