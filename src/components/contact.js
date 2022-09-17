import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import MailIcon from "../../public/mail.svg";
import PhoneIcon from "../../public/phone.svg";
import logo from "../../public/logo.png";
import LocationIcon from "../../public/map-pin.svg";
import { SectionDescription } from "../misc/Typography.js";
import { Container, ContactContainer } from "../misc/Layouts.js";

const HeadingTitle = tw.h5`text-4xl sm:text-5xl font-black tracking-wide text-center font-primary`;
const Subheading = tw.h5`text-center mb-4 font-primary text-primary font-bold  text-2xl`;
const Description = tw(SectionDescription)`mx-auto text-center font-secondary`;
const ThreeColumnContainer = tw.div`mt-10 flex flex-col items-center justify-center sm:items-stretch sm:flex-row flex-wrap  max-w-screen-lg mx-auto`;
const Column = tw.div`lg:w-1/3 max-w-xs`;
const Card = tw.a`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105`;
const ImageContainer = tw.span`text-center rounded-full p-4 bg-gray-100`;
const Title = tw.span`mt-4 font-bold text-xl leading-none font-primary`;
const SubDescription = tw.p`mt-4 text-sm font-medium font-secondary`;
const DescriptionLink = tw.span`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary leading-none hocus:text-primary transition duration-300`;
// Footer
const Footer = tw.div`relative bg-gray-100`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-12 lg:py-12 flex flex-wrap items-center`;
const ColumnFooter = tw.div` w-full md:w-1/3 flex items-center justify-center `;
const ColumnHeading = tw.h5`font-bold font-secondary`;
const LinkList = tw.ul`hidden mt-4 text-sm font-medium md:block`;
const LinkListItem = tw.li`mt-3 font-primary`;
const Link = tw.a`border-b-2 border-transparent hocus:text-primary `;
const LogoContainer = tw.div`flex items-center justify-center `;

const Contact = () => {
  return (
    <Container id="contact">
      <ContactContainer>
        <Subheading>Contact</Subheading>
        <HeadingTitle>Contactez-nous</HeadingTitle>
        <Description>
          Nous sommes à votre dispostion, n&#39;hésitez pas à prendre contact
          avec nous. Nous avons hâte de vous accueullir en Islande !
        </Description>
        <ThreeColumnContainer>
          <Column>
            <Card
              href="https://goo.gl/maps/6oEP4vgHNPU3o3FF8"
              target="_blank"
              rel="noopener"
            >
              <ImageContainer>
                <Image
                  width={24}
                  height={24}
                  alt="Map-pin icon"
                  src={LocationIcon}
                />
              </ImageContainer>
              <Title>Le lieu</Title>
              <SubDescription>
                Kríunesvegur 12 <br /> 203 Kópavogur
              </SubDescription>
              <DescriptionLink>
                <span>Voir sur Maps</span>
              </DescriptionLink>
            </Card>
          </Column>
          <Column>
            <Card href="mailto:schild.laura@hotmail.fr">
              <ImageContainer>
                <Image width={24} height={24} alt="Email Icon" src={MailIcon} />
              </ImageContainer>
              <Title>Laura</Title>
              <SubDescription>schild.laura[at]hotmail.fr</SubDescription>
              <DescriptionLink>
                <span>Écrivez-moi</span>
              </DescriptionLink>
            </Card>
          </Column>
          <Column>
            <Card href="mailto:schmale.tristan@gmail.com">
              <ImageContainer>
                <Image width={24} height={24} alt="Email Icon" src={MailIcon} />
              </ImageContainer>
              <Title>Tristan</Title>
              <SubDescription>schmale.tristan[at]gmail.com</SubDescription>
              <DescriptionLink>
                <span>Écrivez-moi</span>
              </DescriptionLink>
            </Card>
          </Column>
        </ThreeColumnContainer>
      </ContactContainer>
      <Footer>
        <FiveColumns>
          <ColumnFooter>
            <LinkList>
              <ColumnHeading>Menu</ColumnHeading>
              <div>
                <Link href="#programme" passHref>
                  <LinkListItem>Programme</LinkListItem>
                </Link>
              </div>
              <div>
                <Link href="#lieu" passHref>
                  <LinkListItem>Le Lieu</LinkListItem>
                </Link>
              </div>
              <div>
                <Link href="#team" passHref>
                  <LinkListItem>Dream Team</LinkListItem>
                </Link>
              </div>
              <div>
                <Link href="#faq" passHref>
                  <LinkListItem>FAQ</LinkListItem>
                </Link>
              </div>
            </LinkList>
          </ColumnFooter>
          <ColumnFooter>
            <LinkList>
              <ColumnHeading>Liens utiles</ColumnHeading>
              <LinkListItem>
                <Link
                  href="https://www.icelandair.com/fr-fr/"
                  target="_blank"
                  rel="noopener"
                >
                  Icelandair
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link
                  href="https://www.transavia.com/fr-FR/accueil/"
                  target="_blank"
                  rel="noopener"
                >
                  Transavia (low cost)
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link
                  href="https://www.flyplay.com/fr"
                  target="_blank"
                  rel="noopener"
                >
                  PLAY (low cost)
                </Link>
              </LinkListItem>
              <LinkListItem>
                <Link
                  href="https://www.visiticeland.com/"
                  target="_blank"
                  rel="noopener"
                >
                  Visit Iceland
                </Link>
              </LinkListItem>
            </LinkList>
          </ColumnFooter>
          <ColumnFooter>
            <LogoContainer>
              <Link href="#">
                <Image width={150} height={150} alt="" src={logo} />
              </Link>
            </LogoContainer>
          </ColumnFooter>
        </FiveColumns>
      </Footer>
    </Container>
  );
};
export default Contact;
