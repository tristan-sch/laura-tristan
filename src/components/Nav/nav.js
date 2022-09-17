import React from "react";
import tw from "twin.macro";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import MobileNav from "./mobileNav";

const NavWrapper = tw.div`flex justify-between pt-10 px-10 sm:pr-0 sm:pt-16`;
const BrandWrapper = tw.div`flex items-center justify-between text-gray-900 font-primary`;
const Logo = tw.div`mr-3 z-20`;
const Title = tw.div`hidden text-gray-900 h-6 text-xl font-semibold lg:block`;
const DesktoplinksWrapper = tw.div`flex items-center text-xl leading-5`;
const DesktoplinksWrapperUnder = tw.div`flex`;
const DesktopLink = tw.div`relative hidden sm:block`;
const DesktopLinkItem = tw.div`border-b-2 border-transparent hocus:text-primary hocus:border-primary pb-1 transition duration-300 p-1 font-medium text-gray-900 lg:p-6 sm:p-4 font-primary cursor-pointer`;

export const Nav = () => {
  return (
    <NavWrapper>
      <div>
        <Link href="/" aria-label="aria label">
          <BrandWrapper>
            <Logo className="logo">
              <Image src={logo} alt="Logo" width={100} height={100} />
            </Logo>
            <Title>Mariage de Laura &amp; Tristan</Title>
          </BrandWrapper>
        </Link>
      </div>
      <DesktoplinksWrapper>
        <DesktoplinksWrapperUnder>
          <div>
            <DesktopLink>
              <Link href="#programme" passHref>
                <DesktopLinkItem>Programme</DesktopLinkItem>
              </Link>
            </DesktopLink>
          </div>
          <div>
            <DesktopLink>
              <Link href="#lieu" passHref>
                <DesktopLinkItem>Le Lieu</DesktopLinkItem>
              </Link>
            </DesktopLink>
          </div>
          <div>
            <DesktopLink>
              <Link href="#team" passHref>
                <DesktopLinkItem>Dream team</DesktopLinkItem>
              </Link>
            </DesktopLink>
          </div>
          <div>
            <DesktopLink>
              <Link href="#faq" passHref>
                <DesktopLinkItem>FAQ</DesktopLinkItem>
              </Link>
            </DesktopLink>
          </div>
          <div>
            <DesktopLink>
              <Link href="#contact" passHref>
                <DesktopLinkItem>Contact</DesktopLinkItem>
              </Link>
            </DesktopLink>
          </div>
        </DesktoplinksWrapperUnder>
        <MobileNav />
      </DesktoplinksWrapper>
    </NavWrapper>
  );
};

export default Nav;
