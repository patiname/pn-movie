import styled from "styled-components";

const SMain = styled.section`
  width: 100%;
  height: 900px;
  background-color: #333;
  background-size: cover;
  background-position: top;
  padding: 300px 0 0 80px;
`;

const TitleWrap = styled.div`
  text-shadow: 0 0 10px rgba(0 0 0 / 70%);
`;

const Title = styled.h3`
  font-size: 100px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Desc = styled.p`
  max-width: 600px;
  width: 100%;
  font-size: 20px;
  line-height: 30px;
  font-weight: 300;
`;

export const Main = ({ pop }) => {
  return (
    <SMain
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${pop.backdrop_path})`,
      }}
    >
      <TitleWrap>
        <Title>{pop.title}</Title>
        <Desc>{pop.overview.slice(0, 70) + "..."}</Desc>
      </TitleWrap>
    </SMain>
  );
};
