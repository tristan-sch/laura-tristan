import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import tw, { styled, css } from "twin.macro";
import { TeamContainerWrapper, TeamContainer } from "../misc/Layouts.js";
import { SectionDescription } from "../misc/Typography.js";
import ChevronDown from "../../public/chevronDown.svg";
import Florian from "../../public/Florian.jpg";
import Karsten from "../../public/Karsten.jpg";
import Laetitia from "../../public/Laetitia.jpg";
import Raphael from "../../public/Raphael.jpg";
import Antonin from "../../public/Antonin.jpg";
import Camille from "../../public/Camille.jpg";
import Davy from "../../public/Davy.jpg";
import Margaux from "../../public/Margaux.jpg";
import Aurel from "../../public/Aurel.jpg";
import Laurie from "../../public/Laurie.jpg";
import Guillaume from "../../public/Guillaume.jpg";
import Lea from "../../public/Lea.jpg";

const HeadingContainer = tw.div``;
const HeadingTitle = tw.h5`text-4xl sm:text-5xl font-black tracking-wide text-center font-primary`;
const Subheading = tw.h5`text-center mb-4 font-primary text-primary font-bold  text-2xl`;
const HighlightedText = tw.span`text-center`;
const Description = tw(SectionDescription)`mx-auto text-center font-secondary`;
const Cards = tw.div`hidden sm:flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
const Card = tw.div`mt-20 w-full sm:w-1/3 lg:w-1/4 flex flex-col items-center`;
const CardContent = tw.div`flex flex-col items-center mt-6`;
const Name = tw.span`mt-1 text-xl font-medium text-gray-900 font-primary`;

//Slider
const SliderWrapper = tw.div`pt-6 sm:hidden`;
const SliderPosition = styled.span`
  ${({ color }) => `
  text-${color};
`};
  ${tw`font-medium text-center tracking-wide text-sm font-secondary pt-6`}
`;

const ControlsWrapper = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Controls = tw.div`flex items-center`;
const SliderCard = tw.div`mt-6 w-full sm:w-1/3 lg:w-1/4 flex flex-col items-center`;
//Arrow icon from FAQ
const PrevButton = tw.span`px-8 py-3 rotate-90`;
const NextButton = tw.span`px-8 py-3 -rotate-90`;

const Team = ({
  staff = [
    {
      imageSrc: `${Florian.src}`,
      position: "Témoin 👰🏻",
      name: "Florian",
      color: "text-primary",
    },
    {
      imageSrc: `${Karsten.src}`,
      position: "Témoin 🤵🏻",
      name: "Karsten",
      color: "secondary",
    },
    {
      imageSrc: `${Laetitia.src}`,
      position: "Témoin 👰🏻",
      name: "Laëtitia",
      color: "primary",
    },
    {
      imageSrc: `${Raphael.src}`,
      position: "Témoin 🤵🏻",
      name: "Raphaël",
      color: "secondary",
    },
    {
      imageSrc: `${Antonin.src}`,
      position: "Garçon d'honneur 🇫🇷",
      name: "Antonin",
      color: "secondary",
    },
    {
      imageSrc: `${Camille.src}`,
      position: "Demoiselle d'honneur 🇫🇷",
      name: "Camille",
      color: "primary",
    },
    {
      imageSrc: `${Davy.src}`,
      position: "Garçon d'honneur 🇫🇷",
      name: "Davy",
      color: "primary",
    },
    {
      imageSrc: `${Margaux.src}`,
      position: "Demoiselle d'honneur 🇫🇷",
      name: "Margaux",
      color: "primary",
    },
    {
      imageSrc: `${Aurel.src}`,
      position: "Garçon d'honneur 🇮🇸",
      name: "Aurel",
      color: "secondary",
    },
    {
      imageSrc: `${Laurie.src}`,
      position: "Demoiselle d'honneur 🇮🇸",
      name: "Laurie",
      color: "primary",
    },
    {
      imageSrc: `${Guillaume.src}`,
      position: "Garçon d'honneur 🇮🇸",
      name: "Guillaume",
      color: "primary",
    },
    {
      imageSrc: `${Lea.src}`,
      position: "Demoiselle d'honneur 🇮🇸",
      name: "Léa",
      color: "primary",
    },
  ],
}) => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [],
  };

  return (
    <TeamContainerWrapper>
      <TeamContainer>
        <HeadingContainer id="team">
          <Subheading>
            <HighlightedText>La Dream Team</HighlightedText>
          </Subheading>
          <HeadingTitle>
            Témoins, Demoiselles &amp; Garçons d&#39; honneur
          </HeadingTitle>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Description>
        </HeadingContainer>
        <Cards>
          {staff.map((staff, i) => (
            <Card key={i}>
              <Image
                css={[tw`rounded-full`]}
                src={staff.imageSrc}
                alt="Team member photo"
                width={160}
                height={160}
              />
              <CardContent>
                <SliderPosition color={staff.color}>
                  {staff.position}
                </SliderPosition>
                <Name>{staff.name}</Name>
              </CardContent>
            </Card>
          ))}
        </Cards>

        {/* Slider for Mobile  */}
        <SliderWrapper>
          <ControlsWrapper>
            <Controls>
              <PrevButton onClick={sliderRef?.slickPrev}>
                <Image
                  src={ChevronDown}
                  alt="Previous button icon"
                  width={24}
                  height={24}
                />
              </PrevButton>
              <NextButton onClick={sliderRef?.slickNext}>
                <Image
                  src={ChevronDown}
                  alt="Next button icon"
                  width={24}
                  height={24}
                />
              </NextButton>
            </Controls>
          </ControlsWrapper>
          <Slider ref={setSliderRef} {...sliderSettings}>
            {staff.map((staff, i) => (
              <SliderCard key={i}>
                <CardContent>
                  <Image
                    css={[tw`rounded-full`]}
                    src={staff.imageSrc}
                    alt="Team member photo"
                    width={160}
                    height={160}
                  />
                  <SliderPosition color={staff.color}>
                    {staff.position}
                  </SliderPosition>
                  <Name>{staff.name}</Name>
                </CardContent>
              </SliderCard>
            ))}
          </Slider>
        </SliderWrapper>
      </TeamContainer>
    </TeamContainerWrapper>
  );
};
export default Team;
