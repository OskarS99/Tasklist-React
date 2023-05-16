import styled from "styled-components";

export const SectionWrapper = styled.section`
  background-color: white;
  margin: 10px 0;
`;

export const SectionHeader = styled.header`
  font-size: 20px;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 5px solid #ededed;
  padding: 20px;
  margin: 0;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0;
`;

export const SectionBody = styled.div`
  padding: 20px;
`;
