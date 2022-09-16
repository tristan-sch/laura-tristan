import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import Hotel from "../../public/kriunes.png";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const ImageColumn = tw.div`hidden md:block w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = tw.div`md:mr-8 lg:mr-16 md:order-first`;

const TextContent = tw.div`lg:py-8`;

const HeadingTitle = tw.h5`text-4xl sm:text-5xl font-black tracking-wide text-center font-primary`;
const Subheading = tw.h5`text-center mb-4 font-primary text-primary font-bold text-2xl`;
const HighlightedText = tw.span`text-center`;
const Description = tw.p`mx-auto text-left font-secondary mt-4 text-xs md:text-sm lg:text-base font-medium leading-relaxed text-gray-600 max-w-xl`;
const Link = tw.span`text-primary font-bold cursor-pointer hocus:underline`;
const Statistics = tw.div`mt-3 lg:mt-4 xl:mt-8 flex flex-wrap`;
const Statistic = tw.div`text-sm sm:text-lg lg:text-xl w-1/2 mt-4 lg:mt-4 text-center `;
const Value = tw.div`font-secondary font-bold text-primary`;
const Key = tw.div`font-primary font-medium text-gray-700`;

const Concept = ({
  statistics = [
    {
      key: "2 nuits à l'hôtel avec petit-déjeuner",
      value: "L'Hébergement",
    },
    {
      key: "A l'exception du déjeuner du samedi",
      value: "Les repas",
    },
    {
      key: "Restaurant / bar",
      value: "1",
    },
    {
      key: "300€ / adulte",
      value: "Participation",
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
              <HighlightedText>Le Concept</HighlightedText>
            </Subheading>
            <HeadingTitle>Hôtel Kríunes</HeadingTitle>
            <Description>
              Il nous tient à coeur d&#39;organiser le mariage en Islande et de
              vous faire découvrir ce pays et notre vie.
              <br />
              <br />
              Nous privatisons pour le weekend l&#39;
              <Link>
                <a href="https://kriunes.is/" target="_blank" rel="noreferrer">
                  hôtel Kríunes
                </a>
              </Link>{" "}
              et tous les invités y seront acceuillis. L&#39;hôtel se situe à 15
              minutes de Reykjavík, à côté de la{" "}
              <b>réserve naturel de Heidmörk</b>, dispose d&#39;un <b>sauna</b>,{" "}
              <b>bain chaud</b> et propose des <b>kayaks</b> pour aller sur le
              lac.
              <br />
              <br />
              Nous sollicitons votre aide pour une partie des frais et prenons
              en charge le reste. <b>Ce qui est inclut :</b>
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
export default Concept;
