import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function AppPromotion() {
  return (
    <Container>
      <AppInfo>
        <h1>
          <span>صيانة جوالك&nbsp;</span>
          <BoldSpan>في مكانك</BoldSpan>
        </h1>
        <AppDescription>
          خدمة صيانة جوالات متنقلة سريعة بتركيب <br />
          مجاني بأيدي احترافية وين ماكنت في الرياض
        </AppDescription>
        <PlatformsBadge>
          <DownloadImage>
            <Image src="/assets/appstore-badge.svg" alt="" layout="fill" />
          </DownloadImage>
          <DownloadImage>
            <Image src="/assets/googleplay-badge.svg" alt="" layout="fill" />
          </DownloadImage>
        </PlatformsBadge>
      </AppInfo>
      <HeaderIllustration>
        <Image src="/assets/repair-phone.png" alt="repair" layout="fill" />
      </HeaderIllustration>
    </Container>
  );
}

const Container = styled.div`
  height: 90vh;
  background-color: var(--yellow-color);
  background: linear-gradient(
    180deg,
    #ffefb7 0%,
    #ffefb7 50%,
    #ffefb7 88.67%,
    rgba(255, 239, 183, 0.03) 99.99%,
    rgba(255, 239, 183, 0) 100%
  );
  display: flex;
  width: 100vw;
  justify-content: space-around;
  /* align-items: center; */
  padding-top: 40px;
  /* font-family: "Cairo" !important; */
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
    padding-top: 0px;
    justify-content: center;
    align-items: center;
  }
`;

const AppInfo = styled.div`
  color: --text-color;
  margin: 20px 40px;
  span {
    font-weight: 300;
    font-size: 43px;
    /* font-size: 3.5vw; */
    color: var(--text-color);
  }

  @media only screen and (max-width: 768px) {
    margin: 20px;
    span {
      font-size: 25px;
    }
  }
`;

const BoldSpan = styled.span`
  font-weight: bolder !important;
`;

const AppDescription = styled.span`
  font-size: 22px;
  font-weight: lighter !important;
`;

const PlatformsBadge = styled.div`
  margin: 20px 40px;
  gap: 20px;
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const DownloadImage = styled.div`
  height: 130px;
  width: 250px;
  position: relative;
  @media only screen and (max-width: 768px) {
    height: 90px;
  }
`;

const HeaderIllustration = styled.div`
  height: 350px;
  width: 530px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 300px;
    /* margin: 20px; */
  }
`;
