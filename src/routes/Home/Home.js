import styled from "styled-components";
import { Section } from "../../components/Section";
import { moviesApi } from "../../api";
import { useEffect, useState } from "react";
import { PageLoading } from "../../components/PageLoading";
import { Main } from "./Main";
import { PageError } from "./PageError";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/swiper.css";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const Container = styled.div`
  margin-top: 100px;
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
`;

const CoverImg = styled.div`
  height: 180px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

SwiperCore.use([Navigation]);

export const Home = () => {
  const [nowPlay, setNowPlay] = useState();
  const [pop, setPop] = useState();
  const [coming, setComing] = useState();
  const [loading, setLoading] = useState(true);
  const [pageError, setPageError] = useState(false);

  const params = {
    spaceBetween: 20,
    slidesPerView: 5.3,
  };

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

              <Section>
                <Container>
                  <Title>현재 상영 영화</Title>
                  <Swiper {...params} navigation>
                    {nowPlay &&
                      nowPlay.map((play) => (
                        <SwiperSlide key={play.id}>
                          <Link to={{ pathname: "#" }}>
                            <CoverImg
                              style={{
                                backgroundImage: `url(https://image.tmdb.org/t/p/original${play.backdrop_path})`,
                              }}
                            />
                            <MovieTitle>{play.title}</MovieTitle>
                          </Link>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </Container>
              </Section>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
