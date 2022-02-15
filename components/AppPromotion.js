import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function AppPromotion() {
  return (
    <Container>
      <AppInfo>
        <AppText>
          <h1>
            <span>صيانة جوالك&nbsp;</span>
            <BoldSpan>في مكانك</BoldSpan>
          </h1>
          <AppDescription>
            خدمة صيانة جوالات متنقلة سريعة بتركيب <br />
            مجاني بأيدي احترافية وين ماكنت في الرياض
          </AppDescription>
        </AppText>
        <PlatformsBadge>
          <DownloadImage>
            <a
              href="https://play.google.com/store/apps/details?id=com.app.goldenscreen"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/assets/googleplay-badge.svg" alt="" layout="fill" />
            </a>
          </DownloadImage>
          <DownloadImage>
            <a href="https://apple.co/3GV8DFi" target="_blank" rel="noreferrer">
              <Image src="/assets/appstore-badge.svg" alt="" layout="fill" />
            </a>
          </DownloadImage>
        </PlatformsBadge>
      </AppInfo>
      <HeaderIllustration>
        <Image src="/assets/double-phone.svg" alt="repair" layout="fill" />
      </HeaderIllustration>
    </Container>
  );
}

const Container = styled.div`
  height: 80vh;
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
  padding-top: 120px;

  @media only screen and (max-width: 680px) {
    flex-direction: column;
    justify-content: unset;
    align-items: unset !important;
    padding-top: 120px;
    height: 100vh;
  }
  @media only screen and (max-width: 1050px) {
    align-items: center;
  }
  @media only screen and (max-width: 400px) {
    height: 120vh;
  }
`;

const AppInfo = styled.div`
  /* background-color: blue; */
  color: --text-color;
  margin: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 3.5vw;
    color: var(--text-color);
  }

  @media only screen and (max-width: 680px) {
    margin: 0 20px;
    align-items: center;
    gap: 30px;
    span {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 1050px) {
    justify-content: flex-start;
  }
`;

const BoldSpan = styled.span`
  font-weight: 700 !important;
`;

const AppDescription = styled.span`
  font-size: 2.4vw !important;
  font-weight: 300 !important;
  @media only screen and (max-width: 768px) {
    font-size: 20px !important;
  }
`;

const PlatformsBadge = styled.div`
  margin: 20px 40px;
  gap: 20px;
  display: flex;
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const DownloadImage = styled.div`
  height: 130px;
  width: 250px;
  position: relative;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    height: 90px;
  }
`;

const HeaderIllustration = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
  margin-bottom: 10vh;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1050px) {
    height: 400px;
  }
  @media only screen and (max-width: 680px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

const AppText = styled.div`
  @media only screen and (max-width: 680px) {
    margin-left: auto;
  }
`;
