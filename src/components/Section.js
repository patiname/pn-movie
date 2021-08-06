import styled from "styled-components";

const SSection = styled.section`
  padding: 0 80px;
  height: 200vh;
`;

export const Section = ({ children }) => {
  return <SSection>{children}</SSection>;
};
