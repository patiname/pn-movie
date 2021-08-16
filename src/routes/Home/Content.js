import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/swiper.css";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

const Container = styled.div`
  margin-top: 100px;
  @media screen and (max-width: 500px) {
    margin-top: 50px;
  }
`;

const MovieTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    margin-top: 10px;
  }
`;

const CoverImg = styled.div`
  height: 180px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 500px) {
    height: 100px;
  }
`;

SwiperCore.use([Navigation]);

export const Content = ({ title, nowPlay }) => {
  const params = {
    spaceBetween: 20,
    slidesPerView: 5.3,
    breakpoints: {
      1024: {
        spaceBetween: 20,
        slidesPerView: 5.3,
      },
      320: {
        spaceBetween: 10,
        slidesPerView: 2.2,
      },
    },
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Swiper {...params} navigation>
        {nowPlay &&
          nowPlay.map((play) => (
            <SwiperSlide key={play.id}>
              <Link to={{ pathname: `/detail/${play.id}` }}>
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
  );
};
