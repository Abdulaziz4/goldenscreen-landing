import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function OrderSteps() {
  return (
    <Container>
      <Step>
        <StepNum>1</StepNum>
        <StepDetails>
          <IconWrapper>
            <Image src="/assets/step1.svg" alt="step1" height={80} width={50} />
          </IconWrapper>
          <h2>دخل معلومات جهازك</h2>
          <span>
            اختر نوع جهازك والمشكلة اللي تواجهك وبتظهر لك تسعيرة الاصلاح
          </span>
        </StepDetails>
      </Step>
      <Step>
        <StepNum>2</StepNum>
        <StepDetails>
          <IconWrapper>
            <Image src="/assets/step2.svg" alt="step2" height={80} width={70} />
          </IconWrapper>
          <h2>ارفع طلب الصيانة</h2>
          <span>الطلب وصل للفني وبيكون عندك في أقرب وقت</span>
        </StepDetails>
      </Step>
      <Step>
        <StepNum>3</StepNum>
        <StepDetails>
          <IconWrapper>
            <Image src="/assets/step3.svg" alt="step3" height={80} width={50} />
          </IconWrapper>
          <h2>تم إصلاح جوالك</h2>
          <span>الفني المحترف بيصلح جوالك وبيرجع زي الجديد</span>
        </StepDetails>
      </Step>
    </Container>
  );
}

const Container = styled.div`
  box-shadow: 0px 0px 12px 7px rgba(241, 209, 97, 0.12);
  border-radius: 12px;
  /* height: 200px; */
  margin: 70px;
  padding: 20px;
  background-color: var(--background-color);
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    padding: 20px 50px;
  }

  @media only screen and (max-width: 520px) {
    margin: 90px 35px;
    padding: 20px !important;
  }
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 13px;
`;

const StepNum = styled.div`
  background-color: var(--yellow-color);
  padding: 10px;
  font-size: 21px;
  border-radius: 100px;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--text-color);
  @media only screen and (max-width: 520px) {
    h2 {
      font-size: 22px;
    }
    span {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 1000px) {
    h2 {
      font-size: 22px;
    }
    span {
      font-size: 18px;
    }
  }
`;

const IconWrapper = styled.div`
  height: 70;
  width: 50;
  position: relative;
`;
