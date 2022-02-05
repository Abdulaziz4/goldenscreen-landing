import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export default function Landing() {
  return (
    <>
      <Header />
      <AppPromotion>
        <AppInfo>
          <h1>
            <span>صيانة جوالك&nbsp;</span>
            <span>في مكانك</span>
          </h1>
        </AppInfo>
        <Image
          src="/assets/repair-phone.png"
          alt="repair"
          height={300}
          width={450}
        />
      </AppPromotion>
    </>
  );
}

const AppPromotion = styled.div`
  height: 70vh;
  background-color: var(--yellow-color);
  display: flex;
`;

const AppInfo = styled.div`
  color: --text-color;

  h1::nth-child(2) {
    font-weight: 900;
  }
`;
