import styled, {css} from "styled-components";

export const SectionPart = styled.section`
  background-color: white;
  margin: 10px 0;
`;

export const H1 = styled.header`
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

export const Title = styled.h2`
  margin: 0;
`;

export const Body = styled.div`
  padding: 20px;
`;
