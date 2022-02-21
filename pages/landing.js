import styled from "styled-components";
import Header from "../components/Header";
import AppPromotion from "../components/AppPromotion";
import OrderSteps from "../components/OrderSteps";
import Features from "../components/Features";

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
