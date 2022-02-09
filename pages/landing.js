import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import AppPromotion from "../components/AppPromotion";
import OrderSteps from "../components/OrderSteps";

export default function Landing() {
  return (
    <>
      <Header />
      <AppPromotion />

      <OrderSteps/>
    </>
  );
}
