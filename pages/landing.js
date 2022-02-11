import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import AppPromotion from "../components/AppPromotion";
import OrderSteps from "../components/OrderSteps";

export default function Landing() {
  return (
    <Container>
      <Header />
      <AppPromotion />

      <OrderSteps />
      <WrapCenter>
        <CrossedHeadline>
          <BackLine />
          <h1>ليش تختار الشاشة الذهبية</h1>
        </CrossedHeadline>
      </WrapCenter>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const CrossedHeadline = styled.div`
  display: flex;
  flex-direction: column;

  align-self: flex-start;
  color: var(--text-color);
  h1 {
    position: relative;
    top: -27px;
  }
`;

const BackLine = styled.div`
  height: 10px;
  background-color: var(--yellow-color);
`;

const WrapCenter = styled.div`
  display: flex;
  justify-content: center;
`;
