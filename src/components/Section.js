import styled from "styled-components";

const SSection = styled.section`
  padding: 0 80px;
  @media screen and (max-width: 500px) {
    padding: 0 15px;
  }
`;

export const Section = ({ children }) => {
  return <SSection>{children}</SSection>;
};
