import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";

export default function Header() {
  const [isTranspernt, setIsTranspernt] = useState(true);
  console.log(isTranspernt);
  const changeColor = () => {
    if (window.scrollY > window.innerHeight * 0.8 - 80) {
      setIsTranspernt(false);
    } else {
      setIsTranspernt(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  });
  return (
    <Container isTranspernt={isTranspernt}>
      <LogoAndTitle>
        <Image src="/assets/gs-logo.svg" alt="logo" height={65} width={40} />
        <h2>الشاشة الذهبية</h2>
      </LogoAndTitle>

      <LinkContaienr>
        <a href="https://wa.me/966546125784" target="_blank" rel="noreferrer">
          <Image
            src="/assets/whatsapp-logo.svg"
            alt="logo"
            height={50}
            width={30}
          />
        </a>
      </LinkContaienr>
    </Container>
  );
}

const Container = styled.div`
  height: 80px;
  /* background-color: var(--yellow-color); */
  background-color: ${(props) =>
    props.isTranspernt ? "transpernt" : "var(--yellow-color)"};
  backdrop-filter: blur(5px);
  color: var(--text-color);
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  overflow: hidden;
  -webkit-transition: background 0.4s 0s ease;
  -moz-transition: background 0.4s 0s ease;
  -o-transition: background 0.4s 0s ease;
  transition: background 0.4s 0s ease;
  h2 {
    margin-right: 20px;
  }
`;

const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
`;

const LinkContaienr = styled.div`
  cursor: pointer;
`;
