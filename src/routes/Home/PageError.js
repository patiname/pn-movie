import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 300px;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h3`
  max-width: 500px;
  font-size: 100px;
  font-weight: 800;
`;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 30px;
  line-height: 30px;
  opacity: 0.7;
  font-weight: 200;
  a {
    color: crimson;
    text-decoration: underline;
  }
`;

export const PageError = () => {
  return (
    <Wrap>
      <Title>Page Not Found</Title>
      <Desc>
        페이지를 찾을수 없어나, 오류가 생겼어요..! <br />
        뒤로가기 버튼을 클릭하시거나, <Link to="/">홈으로</Link> 가주세요.
      </Desc>
    </Wrap>
  );
};
