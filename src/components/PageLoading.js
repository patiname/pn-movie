import styled, { keyframes } from "styled-components";

const loadingAni = keyframes`
    0%{
        transform:rotateZ(0)
    }
    100%{
        transform:rotateZ(360deg)
    }
`;

const LoadingWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Load = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid crimson;
  border-radius: 50%;
  border-color: crimson transparent crimson transparent;
  animation: ${loadingAni} 1s infinite;
`;

export const PageLoading = () => {
  return (
    <LoadingWrap>
      <Load></Load>
    </LoadingWrap>
  );
};
