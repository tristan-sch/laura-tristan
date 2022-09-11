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
      title: "Lorem ipsum dolor sit amet ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.",
    },
    {
      title: "Lorem ipsum dolor sit amet ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.",
    },
    {
      title: "Lorem ipsum dolor sit amet ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.",
    },
    {
      title: "Lorem ipsum dolor sit amet ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim.",
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
