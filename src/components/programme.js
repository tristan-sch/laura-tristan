import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import hero from "../../public/404.png";
import { ProgrammeContainerWrapper } from "../misc/Layouts.js";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row justify-between max-w-screen-xl mx-auto pb-20 pt-10 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(
  Column
)`hidden lg:block md:w-6/12 flex-shrink-0 relative mt-8`;
const TextColumn = tw.div`md:w-full lg:w-6/12 mt-16 md:mt-0 md:ml-12 lg:ml-16 md:order-last`;

const HeadingTitle = tw.h5`text-4xl sm:text-5xl font-black tracking-wide text-center font-primary`;
const Subheading = tw.h5`text-center mb-4 font-primary text-primary font-bold  text-2xl`;
const HighlightedText = tw.span`text-center`;
const TextContent = tw.div`lg:py-8 text-center lg:text-left`;
const Steps = tw.ul`mt-12`;
const Step = tw.li`mt-8 flex flex-col lg:flex-row items-center lg:items-start`;
const StepNumber = tw.div`font-primary font-semibold text-2xl leading-none text-primary`;
const StepText = tw.div`font-secondary mt-3 lg:mt-0 md:ml-6`;
const StepHeading = tw.h6`font-primary leading-none text-2xl font-semibold`;
const StepDescription = tw.p`font-secondary mt-3 max-w-lg leading-loose text-sm md:text-base text-gray-600 font-medium`;

const Programme = () => {
  return (
    <ProgrammeContainerWrapper>
      <Container id="programme">
        <TwoColumn>
          <ImageColumn>
            <Image
              alt="Hero image"
              src={hero}
              width={768}
              height={512}
              css={[tw`rounded`]}
            />
          </ImageColumn>
          <TextColumn>
            <TextContent>
              <Subheading>
                <HighlightedText>Programme</HighlightedText>
              </Subheading>
              <HeadingTitle>Un weekend en Islande</HeadingTitle>
              <Steps>
                <Step>
                  <StepNumber>26 mai</StepNumber>
                  <StepText>
                    <StepHeading>
                      Arrivée, installation à l&#39;hôtel et dîner
                      d&#39;ouverture
                    </StepHeading>
                    <StepDescription>
                      Nous vous accueillons en Islande ! Un premier dîner est
                      prévu à <b>19h</b> à l&#39;hôtel avec les invités.
                    </StepDescription>
                  </StepText>
                </Step>
                <Step>
                  <StepNumber>27 mai</StepNumber>
                  <StepText>
                    <StepHeading>
                      Cérémonie, vin d&#39;honneur &amp; Bal
                    </StepHeading>
                    <StepDescription>
                      La matinée et le déjeuner seront libres. Une cérémonie
                      laïque se tiendra dans d&#39;après-midi à l&#39;hôtel,
                      suivi d&#39;un vin d&#39;honneur. Le dîner débutera en
                      début de soirée, puis, nous ouvrirons le Bal.
                    </StepDescription>
                  </StepText>
                </Step>
                <Step>
                  <StepNumber>28 mai</StepNumber>
                  <StepText>
                    <StepHeading>Petit-déjeuner &amp; fin</StepHeading>
                    <StepDescription>
                      Le petit-déjeuner sera l&#39;occasion de partager un
                      dernier moment ensemble afin de clôturer ce weekend.
                    </StepDescription>
                  </StepText>
                </Step>
              </Steps>
            </TextContent>
          </TextColumn>
        </TwoColumn>
      </Container>
    </ProgrammeContainerWrapper>
  );
};
export default Programme;
