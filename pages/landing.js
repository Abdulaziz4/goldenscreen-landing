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
      <Features>
        <FeatureCard>
          <Image src="/assets/feat1.svg" alt="feat1" height={60} width={60} />
          <h2>قطع غيار أصلية</h2>
          <p>تنوع خيارات قطع الغيار بناء على ميزانيتك</p>
        </FeatureCard>
        <FeatureCard>
          <Image src="/assets/feat2.svg" alt="feat1" height={60} width={60} />
          <h2>إصلاح فوري</h2>
          <p>نجيك وين ماكنت في الرياض في أسرع وقت</p>
        </FeatureCard>
        <FeatureCard>
          <Image src="/assets/feat3.svg" alt="feat1" height={60} width={60} />
          <h2>مهندسين محترفين</h2>
          <p>طاقم مهندسينا مؤهلون ومدربون</p>
        </FeatureCard>
        <FeatureCard>
          <Image src="/assets/feat4.svg" alt="feat1" height={60} width={60} />
          <h2>ضمان على الإصلاح</h2>
          <p>ضمان على القطع يمتد لشهور على حساب القطعة</p>
        </FeatureCard>
      </Features>
    </Container>
  );
}

const Features = styled.div`
  margin: 50px 120px;
  display: grid;
  gap: 60px;
  grid-template-columns: [first] auto [line2] auto [end];
  grid-template-columns: [row1-start] auto [row1-end] auto [last-line];
`;

const FeatureCard = styled.div`
  /* background: #fdfdfd; */
  box-shadow: 5px 5px 50px rgba(255, 235, 175, 0.4);
  border-radius: 10px;
  padding: 50px;
  color: var(--text-color);
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  p {
    font-size: 24px;
  }
  h2 {
    font-size: 27px;
  }
`;

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
