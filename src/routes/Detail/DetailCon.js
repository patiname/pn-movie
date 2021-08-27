import styled from "styled-components";

const ConWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: 700;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`;

const ListWrap = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const ReleaseDate = styled.h4`
  font-size: 20px;
  margin-bottom: 15px;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const List = styled.h4``;

const RunTime = styled.h4``;

const Desc = styled.p`
  margin-top: 50px;
  font-size: 20px;
  line-height: 30px;
  opacity: 0.7;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const DetailCon = ({
  title,
  release_date,
  genres,
  runtime,
  overview,
}) => {
  return (
    <ConWrap>
      <Title>{title}</Title>
      <ReleaseDate>{release_date}</ReleaseDate>
      <ListWrap>
        장르:
        {genres.map((genre, index) => (
          <List key={index}>&nbsp;&nbsp;{genre.name}, </List>
        ))}
      </ListWrap>
      <RunTime>런타임: {runtime}</RunTime>
      <Desc>{overview}</Desc>
    </ConWrap>
  );
};
