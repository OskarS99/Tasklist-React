import {SectionPart, H1, Title, Body} from "./styled.js";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionPart>
    <H1>
      <Title>{title}</Title>
     {extraHeaderContent}
    </H1>
    <Body>
      {body}
    </Body>
  </SectionPart>
);

export default Section;