import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import AppPromotion from "../components/AppPromotion";
import OrderSteps from "../components/OrderSteps";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Landing() {
  return (
    <Container>
      <Header />
      <AppPromotion />
      <OrderSteps />
      <Features />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  font-family: "Cairo", sans-serif;
`;
