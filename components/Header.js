import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <Container>
      <LogoAndTitle>
        <Image src="/assets/gs-logo.svg" alt="logo" height={65} width={40} />
        <h2>الشاشة الذهبية</h2>
      </LogoAndTitle>
      <Link href="https://wa.me/966546125784" passHref>
        <Image
          src="/assets/whatsapp-logo.svg"
          alt="logo"
          height={65}
          width={40}
        />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  height: 80px;
  background-color: var(--yellow-color);
  color: var(--text-color);
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  h2 {
    margin-right: 20px;
  }
`;

const LogoAndTitle = styled.div`
  display: flex;
  align-items: center;
`;
