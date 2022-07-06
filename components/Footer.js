import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Footer() {
  return (
    <ContainerFooter>
      <h3>جميع الحقوق محفوظة للشاشة الذهبية {new Date().getFullYear()}</h3>
      <a href="https://maroof.sa/234425" target="_blank" rel="noreferrer">
       <Image src="/assets/maroof.svg" alt="logo" height={75} width={75} />
       <h4>موثق لدى معروف</h4>
      </a>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.div`
  height: 14vh;
  margin-top: 70px;
  background-color: var(--yellow-color);
  color: var(--text-color);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:flex-end ;
  padding: 10px;
  font-weight: 200;
  a{
    display:flex ;
    flex-direction:column ;
    align-items:center ;
  }
  @media only screen and (max-width: 520px) {
    h3 {
      font-size: 15px;
    }
  }
`;
