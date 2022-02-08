import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import AppPromotion from "../components/AppPromotion";

export default function Landing() {
  return (
    <>
      <Header />
      <AppPromotion />

      <OrderSteps>
        <Step>
          <StepNum>1</StepNum>
          <StepDetails>
            <IconWrapper>
              <Image
                src="/assets/step1.svg"
                alt="step1"
                height={80}
                width={50}
              />
            </IconWrapper>
            <h2>دخل معلومات جهازك</h2>
            <span>
              اختر نوع جهازك والمشكلة اللي تواجهك
              <br />
              وبتظهر لك تسعيرة الاصلاح
            </span>
          </StepDetails>
        </Step>
        <Step>
          <StepNum>2</StepNum>
          <StepDetails>
            <IconWrapper>
              <Image
                src="/assets/step2.svg"
                alt="step2"
                height={80}
                width={70}
              />
            </IconWrapper>
            <h2>ارفع طلب الصيانة</h2>
            <span>
              الطلب وصل للفني وبيكون عندك <br />
              في أقرب وقت
            </span>
          </StepDetails>
        </Step>
        <Step>
          <StepNum>3</StepNum>
          <StepDetails>
            <IconWrapper>
              <Image
                src="/assets/step3.svg"
                alt="step3"
                height={80}
                width={50}
              />
            </IconWrapper>
            <h2>تم إصلاح جوالك</h2>
            <span>
              الفني المحترف بيصلح جوالك وبيرجع <br />
              زي الجديد
            </span>
          </StepDetails>
        </Step>
      </OrderSteps>
    </>
  );
}

const OrderSteps = styled.div`
  box-shadow: 0px 0px 12px 7px rgba(241, 209, 97, 0.12);
  border-radius: 12px;
  height: 200px;
  margin: 70px;
  padding: 20px;
  background-color: var(--background-color);
  display: flex;
  justify-content: space-between;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
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
`;

const IconWrapper = styled.div`
  height: 70;
  width: 50;
  position: relative;
`;
