import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import Hotel from "../../public/optimized-images/kriunes.png";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const ImageColumn = tw.div`hidden lg:block w-full max-w-md mx-auto md:max-w-none md:mx-0 md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = tw.div`lg:mr-16 md:order-first`;

const TextContent = tw.div`lg:py-8`;

const HeadingTitle = tw.h5`text-4xl sm:text-5xl font-black tracking-wide text-center font-primary`;
const Subheading = tw.h5`text-center mb-4 font-primary text-primary font-bold text-2xl`;
const HighlightedText = tw.span`text-center`;
const Description = tw.p`mx-auto text-center font-secondary my-4 text-sm md:text-lg lg:text-lg leading-relaxed text-gray-600 max-w-xl`;
const Link = tw.span`text-primary font-bold cursor-pointer hocus:underline`;
const Statistics = tw.div`text-center mt-3 sm:my-8 flex flex-col items-center md:flex-row`;
const Statistic = tw.div`text-sm sm:text-lg lg:text-xl w-1/2 my-4`;
const Value = tw.div`font-secondary font-bold text-primary`;
const Key = tw.div`font-primary font-medium text-gray-700`;

const Lieu = ({
  statistics = [
    {
      key: "2 nuits avec petit-déjeuner",
      value: "L'hébergement à l'hôtel",
    },
    {
      key: "du vendredi soir, boissons incluses",
      value: "Le dîner 3 plats",
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
            loading="lazy"
            unoptimized={true}
          />
        </ImageColumn>
        <TextColumn>
          <TextContent>
            <Subheading>
              <HighlightedText>Le Lieu</HighlightedText>
            </Subheading>
            <HeadingTitle>Hôtel Kríunes</HeadingTitle>
            <Description>
              Il nous tient à coeur d&#39;organiser le mariage en Islande. Afin
              de faciliter l&#39;organisation, nous privatisons l&#39;
              <Link>
                <a href="https://kriunes.is/" target="_blank" rel="noreferrer">
                  hôtel Kríunes
                </a>
              </Link>{" "}
              pour le weekend. <br /> La journée du samedi avec le{" "}
              <b>vin d&#39;honneur</b>, le <b>dîner de mariage</b> et le{" "}
              <b>Bal</b> sera prise en charge par nos soins et nous vous
              demandons une participation de <b>275</b>€ par adulte{" "}
              <b>incluant :</b>
            </Description>
            <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>{" "}
            <Description>
              L&#39;hôtel Kríunes se situe à 15 minutes de Reykjavík, à côté de
              la <b>réserve naturelle de Heiðmörk</b>, dispose d&#39;un{" "}
              <b>sauna</b>, <b>bain chaud</b> et propose des <b>kayaks</b> pour
              aller sur le lac.
            </Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
export default Lieu;
