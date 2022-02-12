import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Features() {
  return (
    <>
      <WrapCenter>
        <CrossedHeadline>
          <BackLine />
          <h1>ليش تختار الشاشة الذهبية</h1>
        </CrossedHeadline>
      </WrapCenter>

      <FeatContainer>
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
      </FeatContainer>
    </>
  );
}

const FeatContainer = styled.div`
  margin: 50px 120px;
  display: grid;
  gap: 60px;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 20px 40px;
    gap: 30px;
  }
`;

const FeatureCard = styled.div`
  background: #fdfdfd;
  box-shadow: 5px 5px 50px rgba(255, 235, 175, 0.4);
  border-radius: 10px;
  padding: 50px;
  color: var(--text-color);
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
