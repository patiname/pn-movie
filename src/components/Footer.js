import styled from "styled-components";

const SFooter = styled.footer`
  height: 80px;
  margin-top: 200px;
  border-top: 1px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
`;

export const Footer = () => {
  return <SFooter>&copy; patiname</SFooter>;
};
