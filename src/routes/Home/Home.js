import styled from "styled-components";
import { Section } from "../../components/Section";
import { moviesApi } from "../../api";
import { useEffect, useState } from "react";
import { PageLoading } from "../../components/PageLoading";
import { Main } from "./Main";
import { PageError } from "./PageError";

export const Home = () => {
  const [nowPlay, setNowPlay] = useState();
  const [pop, setPop] = useState();
  const [coming, setComing] = useState();
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState(false);

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
        setPageError(true);
        console.log(error);
      }
    };
    movieData();
  }, []);

  console.log("현재상영", nowPlay);
  // console.log("인기", pop);
  // console.log("상영예정", coming);

  return (
    <div>
      {loading ? (
        <PageLoading />
      ) : (
        <div>
          {pageError ? (
            <PageError />
          ) : (
            <div>
              {pop ? <Main pop={pop[1]} /> : null}

              <Section>홈 컨텐츠</Section>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
