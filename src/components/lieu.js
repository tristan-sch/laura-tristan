import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import Hotel from "../../public/kriunes.png";
import { SectionDescription } from "../misc/Typography.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const ImageColumn = tw.div`hidden md:block w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = tw.div`md:mr-8 lg:mr-16 md:order-first`;

const TextContent = tw.div`lg:py-8`;

const HeadingTitle = tw.h5`text-4xl sm:text-5xl font-black tracking-wide text-center font-primary`;
const Subheading = tw.h5`text-center mb-4 font-primary text-primary font-bold text-2xl`;
const HighlightedText = tw.span`text-center`;
const Description = tw(SectionDescription)`mx-auto text-center font-secondary`;

const Statistics = tw.div`mt-6 lg:mt-8 xl:mt-16 flex flex-wrap`;
const Statistic = tw.div`text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center `;
const Value = tw.div`font-secondary font-bold text-primary`;
const Key = tw.div`font-primary font-medium text-gray-700`;

const Lieu = ({
  statistics = [
    {
      key: "Countries",
      value: "192",
    },
    {
      key: "Hotels",
      value: "479",
    },
    {
      key: "Rooms",
      value: "2093",
    },
    {
      key: "Workers",
      value: "10347",
    },
  ],
}) => {
  return (
    <Container id="lieu">
      <TwoColumn>
        <ImageColumn>
          <Image
            css={[tw`rounded`]}
            src={Hotel.src}
            alt="Hotel pohoto"
            width={533}
            height={641}
          />
        </ImageColumn>
        <TextColumn>
          <TextContent>
            <Subheading>
              <HighlightedText>Le Lieu</HighlightedText>
            </Subheading>
            <HeadingTitle>Hôtel Kríunes</HeadingTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Description>
            <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
export default Lieu;
