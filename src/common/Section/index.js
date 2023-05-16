import {
  SectionTitle,
  SectionBody,
  SectionWrapper,
  SectionHeader,
} from "./styled.js";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionWrapper>
    <SectionHeader>
      <SectionTitle>{title}</SectionTitle>
      {extraHeaderContent}
    </SectionHeader>
    <SectionBody>{body}</SectionBody>
  </SectionWrapper>
);

export default Section;
