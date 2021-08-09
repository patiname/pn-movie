import styled from "styled-components";
import { Section } from "../../components/Section";
import { moviesApi } from "../../api";
import { useEffect, useState } from "react";

const Main = styled.section`
  width: 100%;
  height: 900px;
  background-color: #333;
  background-size: cover;
  background-position: top;
`;

export const Home = () => {
  const [nowPlay, setNowPlay] = useState();
  const [pop, setPop] = useState();
  const [coming, setComing] = useState();
  const [loading, setLoading] = useState(true);

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

        const {
          data: { results: coming },
        } = await moviesApi.upcoming();
        setComing(coming);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  // console.log("현재상영", nowPlay);
  // console.log("인기", pop);
  // console.log("상영예정", coming);

  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <div>
          {pop ? (
            <Main
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${pop[0].backdrop_path})`,
              }}
            ></Main>
          ) : null}

          <Section>홈 컨텐츠</Section>
        </div>
      )}
    </div>
  );
};
