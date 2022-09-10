import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import {
  SectionHeading as HeadingTitle,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";

import hero from "../../public/hero.png";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const Subheading = tw(SubheadingBase)`mb-4 font-primary`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Category = tw.div`mt-4 text-secondary font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
const Link = tw.a`inline-block mt-2 text-sm text-primary font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary`;

const Concept = () => {
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <Subheading>Le concept</Subheading>
          <HeadingTitle>Popular Blog Posts</HeadingTitle>
          <HeadingDescription>
            Some amazing blog posts that are written by even more amazing
            people.
          </HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          <Column>
            <Card>
              <Image src={hero} alt="alt text" width={250} height={250} />
              <Category>Category</Category>
              <Title>Title</Title>
              <Link href="#">Read Post</Link>
            </Card>
          </Column>
          <Column>
            <Card>
              <Image src={hero} alt="alt text" width={250} height={250} />
              <Category>Category</Category>
              <Title>Title</Title>
              <Link href="#">Read Post</Link>
            </Card>
          </Column>
          <Column>
            <Card>
              <Image src={hero} alt="alt text" width={250} height={250} />
              <Category>Category</Category>
              <Title>Title</Title>
              <Link href="#">Read Post</Link>
            </Card>
          </Column>
        </ThreeColumn>
      </Content>
    </Container>
  );
};
export default Concept;
