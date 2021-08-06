import styled from "styled-components";
import { Section } from "../../components/Section";
import { moviesApi } from "../../api";
import { useEffect, useState } from "react";

const Main = styled.section`
  width: 100%;
  height: 900px;
  background-color: #333;
`;

export const Home = () => {
  const [nowPlay, setNowPlay] = useState();
  const [pop, setPop] = useState();

  // const movieData = async () => {
  //   // console.log(await moviesApi.nowPlaying());
  //   const {
  //     data: { results },
  //   } = await moviesApi.nowPlaying();
  //   // setNowPlaying(results);
  //   // console.log(results);
  // };
  // movieData();

  /* console.log(nowPlaying); */

  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: nowPlaying },
        } = await moviesApi.nowPlaying();
        setNowPlay(nowPlaying);

        const {
          data: { results: popular },
        } = await moviesApi.popular();
        setPop(popular);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  console.log("현재상영", nowPlay);
  console.log("인기", pop);

  return (
    <div>
      <Main></Main>

      <Section>홈 컨텐츠</Section>
    </div>
  );
};
