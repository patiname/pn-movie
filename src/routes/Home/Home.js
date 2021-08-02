import styled from "styled-components";
import { Section } from "../../components/Section";

const Main = styled.section`
  width: 100%;
  height: 900px;
  background-color: #333;
`;

export const Home = () => {
  return (
    <div>
      <Main></Main>

      <Section>홈 컨텐츠</Section>
    </div>
  );
};
