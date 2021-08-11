import styled from "styled-components";
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

export const Content = ({ title, nowPlay }) => {
  const params = {
    spaceBetween: 20,
    slidesPerView: 5.3,
  };

  return (
    <Container>
      <Title>{title}</Title>
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
  );
};
