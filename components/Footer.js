import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <ContainerFooter>
      <h3>جميع الحقوق محفوظة للشاشة الذهبية {new Date().getFullYear()}</h3>
    </ContainerFooter>
  );
}

const ContainerFooter = styled.div`
  height: 14vh;
  background-color: var(--yellow-color);
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  font-weight: 200;
`;
