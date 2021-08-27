import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { moviesApi } from "../../api";
import { PageLoading } from "../../components/PageLoading";
import { Section } from "../../components/Section";
import { PageError } from "../Home/PageError";
import { Helmet } from "react-helmet-async";

const Container = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const CoverImg = styled.iframe`
  width: 45%;
  height: 70vh;
  background-size: cover;
  background-position: center;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Video = styled.iframe`
  width: 45%;
  height: 70vh;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

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

export const Detail = () => {
  const { movieId } = useParams();
  const [details, setDetils] = useState();
  const [video, setVideo] = useState();
  const [pageError, setPageError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const detailData = async () => {
        const { data: dataDe } = await moviesApi.detail(movieId);
        setDetils(dataDe);

        const {
          data: { results: videoData },
        } = await moviesApi.video(movieId);
        // setVideo(videoData[0].key);
        videoData.length > 0 ? setVideo(videoData[0].key) : setVideo("");
      };
      setLoading(false);
      detailData();
    } catch (error) {
      setPageError(true);
    }
  }, []);

  console.log(details);

  return (
    <div>
      <Helmet>
        <title>PN movie | 영화 상세 보기</title>
      </Helmet>
      {loading ? (
        <PageLoading />
      ) : (
        <div>
          {pageError ? (
            <PageError />
          ) : (
            <Section>
              {details ? (
                <Container>
                  {video === "" ? (
                    <CoverImg
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`,
                      }}
                    />
                  ) : (
                    <Video
                      src={`https://www.youtube.com/embed/${video}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    />
                  )}

                  <ConWrap>
                    <Title>{details.title}</Title>
                    <ReleaseDate>{details.release_date}</ReleaseDate>
                    <ListWrap>
                      장르:
                      {details.genres.map((genre, index) => (
                        <List key={index}>&nbsp;&nbsp;{genre.name}, </List>
                      ))}
                    </ListWrap>
                    <RunTime>런타임: {details.runtime}</RunTime>
                    <Desc>{details.overview}</Desc>
                  </ConWrap>
                </Container>
              ) : null}
            </Section>
          )}
        </div>
      )}
    </div>
  );
};
