import styled from "styled-components";
import Header from "./Header";
import AppPromotion from "./AppPromotion";
import OrderSteps from "./OrderSteps";
import Features from "./Features";

export default function Landing() {
  return (
    <Container>
      <Header />
      <AppPromotion />
      <OrderSteps />
      <Features />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  font-family: "Cairo", sans-serif;
`;
