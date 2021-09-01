import { Section } from "../../components/Section";
import { moviesApi } from "../../api";
import { useEffect, useState } from "react";
import { PageLoading } from "../../components/PageLoading";
import { Main } from "./Main";
import { PageError } from "./PageError";
import { Content } from "./Content";

export const Home = () => {
  const [nowPlay, setNowPlay] = useState();
  const [pop, setPop] = useState();
  const [coming, setComing] = useState();
  const [rated, setRated] = useState();
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

        const {
          data: { results: topRated },
        } = await moviesApi.top_rated();
        setRated(topRated);

        setLoading(false);
      } catch (error) {
        setPageError(true);
        console.log(error);
      }
    };
    movieData();
  }, []);

  // console.log("현재상영", nowPlay);
  // console.log("인기", pop);
  // console.log("상영예정", coming);
  // console.log("순위", rated);

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
              {pop ? <Main pop={pop[0]} /> : null}

              <Section>
                <Content title="현재 상영 영화" nowPlay={nowPlay} />
                <Content title="상영 예정" nowPlay={coming} />
                <Content title="인기 영화" nowPlay={pop} />
                <Content title="영화 순위" nowPlay={rated} />
              </Section>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
