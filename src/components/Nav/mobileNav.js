import { useState } from "react";
import tw from "twin.macro";
import Link from "next/link";
import Image from "next/image";

import hamburger from "../../../public/hamburger.svg";
import close from "../../../public/close.svg";

const MobileNavWrapper = tw.div`sm:hidden`;
const OpenButton = tw.button`ml-1 mr-1 h-8 w-8 rounded py-1`;
const CloseButtonWrapper = tw.div`flex justify-end`;
const CloseButton = tw.button`mr-16 mt-10 h-8 w-8 rounded py-6`;
const MobileLinksWrapper = tw.div`fixed mt-20 h-full`;
const NavLinks = tw.div`px-20 py-4 font-primary`;
const NavlinkItem = tw.div`text-2xl font-bold tracking-widest text-gray-100`;

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <MobileNavWrapper>
      <OpenButton type="button" aria-label="Toggle Menu" onClick={onToggleNav}>
        <Image src={hamburger} alt="Hamburger Icon" width={50} height={50} />
      </OpenButton>
      <div
        css={[
          tw`fixed pt-4 top-0 left-0 z-10 h-full w-full transform bg-primary duration-300 ease-in-out h-160`,
          navShow ? tw`translate-x-0` : tw`translate-x-full`,
        ]}
      >
        <CloseButtonWrapper>
          <CloseButton
            type="button"
            aria-label="Toggle Menu"
            onClick={onToggleNav}
          >
            <Image src={close} alt="Close Icon" width={50} height={50} />
          </CloseButton>
        </CloseButtonWrapper>
        <MobileLinksWrapper>
          <div>
            <NavLinks>
              <Link href="#programme" passHref>
                <NavlinkItem onClick={onToggleNav}>Programme</NavlinkItem>
              </Link>
            </NavLinks>
          </div>
          <div>
            <NavLinks>
              <Link href="#lieu" passHref>
                <NavlinkItem onClick={onToggleNav}>Le Lieu</NavlinkItem>
              </Link>
            </NavLinks>
          </div>
          <div>
            <NavLinks>
              <Link href="#team" passHref>
                <NavlinkItem onClick={onToggleNav}>Dream Team</NavlinkItem>
              </Link>
            </NavLinks>
          </div>
          <div>
            <NavLinks>
              <Link href="#faq" passHref>
                <NavlinkItem onClick={onToggleNav}>FAQ</NavlinkItem>
              </Link>
            </NavLinks>
          </div>
          <div>
            <NavLinks>
              <Link href="#contact" passHref>
                <NavlinkItem onClick={onToggleNav}>Contact</NavlinkItem>
              </Link>
            </NavLinks>
          </div>
        </MobileLinksWrapper>
      </div>
    </MobileNavWrapper>
  );
};

export default MobileNav;
