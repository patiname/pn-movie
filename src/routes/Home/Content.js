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
                    backgroundImage: `url(
                      ${
                        play.backdrop_path
                          ? `https://image.tmdb.org/t/p/original${play.backdrop_path}`
                          : "https://lh3.googleusercontent.com/proxy/V0cX7SAg4hmNDX9UMS2tlg9Wfhad9uzZ0UHiG9Pp6hKyIJ2NAItmZbSdp78ASTe9-rF2VR3Yqf_D6_RKZeADJxsE0CrXDKY3a2lANeSRoqpEYbRrd-dbCodOyA90RExx3i1QcXJLYx_e"
                      }
                    )`,
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
