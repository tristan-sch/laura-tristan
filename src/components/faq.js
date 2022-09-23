import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import Image from "next/image";
import { SectionDescription } from "../misc/Typography.js";
import { Container, FaqContainer } from "../misc/Layouts.js";
import ChevronDown from "../../public/chevronDown.svg";

const HeadingContainer = tw.div``;
const HeadingTitle = tw.h5`text-4xl sm:text-5xl font-black tracking-wide text-center font-primary`;
const Subheading = tw.h5`text-center mb-4 font-primary text-primary font-bold  text-2xl`;
const HighlightedText = tw.span`text-center`;
const Description = tw(SectionDescription)`mx-auto text-center font-secondary`;
const Column = tw.div`flex flex-col items-center`;
const QuestionsContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-gray-300 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold font-primary`;
const QuestionToggleIcon = motion(tw.span`ml-2 transition duration-300`);
const Answer = motion(
  tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed font-secondary`
);

const Faq = ({
  questions = [
    {
      title:
        "Quelle est la date limite pour confirmer sa venue et comment le faire ?",
      answer:
        "Un lien RSVP est présent en haut de site, nous vous prions de cliquer dessus et de remplir le formulaire en ligne. Si vous pouviez nous donner une réponse définitive avant Noël, ce serait parfait.",
    },
    {
      title:
        "Qu'est ce qui est inclus dans les 300€ de participation et y-a-t-il une réduction pour les enfants ?",
      answer:
        "La participation est de 300€ par adulte (150€ par enfant) et inclut deux nuits en chambre double (vendredi et samedi), le dîner (boissons incluses) du vendredi soir, les petit-déjeuners (samedi et dimanche). La journée du samedi avec le vin d'honneur, le dîner de mariage et le Bal sera prise en charge par nos soins.",
    },
    {
      title: "Comment se rendre en Islande ?",
      answer:
        "Trois compagnies aériennes proposent des vols vers Keflavík (cf. liens utiles en bas de site) : Icelandair (depuis Paris CDG et Francfort), Transavia (depuis Paris Orly et Nantes), PLAY (depuis CDG). A noter que Transavia n'a pas encore ouvert ses vols. L'aéroport international de Keflavík se situe à 40 minutes de l'hotel Kríunes.",
    },
    {
      title: "Si je veux voyager en Islande, avant ou après le mariage ?",
      answer:
        "L'hôtel Kríunes propose un tarif réduit pour avancer et/ou prolonger le séjour, demandez-nous ou indiquez-le dans le formulaire RSVP. Si vous souhaitez voyager en dehors de Reykjavík, nous  intégrerons prochainement sur les site des idées de circuit et activités.",
    },
    {
      title: "Comment s'habiller pour le mariage ?",
      answer:
        "Si des vêtements chauds et imperméables sont de rigueur en Islande, cet évènement reste un mariage, doudoune et bonnet interdits !",
    },
    {
      title: "Et le cadeau de mariage ?",
      answer:
        "Notre plus beau cadeau sera votre venue, nous ne voulons rien d'autre que votre présence.",
    },
    {
      title: "Encore une question ?",
      answer:
        "Contactez-nous ! Si vous n'avez pas notre numéro de téléphone, vous trouverez nos adresses mails un peu plus bas.",
    },
  ],
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
  const toggleQuestion = (questionIndex) => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container id="faq">
      <FaqContainer>
        <Column>
          <HeadingContainer id="team">
            <Subheading>
              <HighlightedText>FAQ</HighlightedText>
            </Subheading>
            <HeadingTitle>Les réponses à vos questions</HeadingTitle>
            <Description>
              Voici des informations utiles sur le mariage, son déroulement et
              les questions que vous pourriez-vous poser.
            </Description>
          </HeadingContainer>
          <QuestionsContainer>
            {questions.map((question, i) => (
              <FAQ
                key={i}
                onClick={() => {
                  toggleQuestion(i);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{question.title}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 },
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === i ? "open" : "collapsed"}
                    transition={{
                      duration: 0.02,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <span>
                      <Image
                        src={ChevronDown}
                        alt="Chevron down icon"
                        width={24}
                        height={24}
                      />
                    </span>
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" },
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === i ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  <span>{question.answer}</span>
                </Answer>
              </FAQ>
            ))}
          </QuestionsContainer>
        </Column>
      </FaqContainer>
    </Container>
  );
};
export default Faq;
