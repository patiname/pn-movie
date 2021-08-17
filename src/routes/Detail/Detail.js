import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { moviesApi } from "../../api";
import { PageLoading } from "../../components/PageLoading";
import { Section } from "../../components/Section";
import { PageError } from "../Home/PageError";

const Container = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: space-between;
`;

const CoverImg = styled.iframe`
  width: 45%;
  height: 70vh;
  /* background-size: cover;
  background-position: center; */
`;

const ConWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const ListWrap = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const List = styled.h4``;

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
        setVideo(videoData[0].key);
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
                  {/* <CoverImg
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`,
                    }}
                  /> */}
                  <CoverImg
                    src={`https://www.youtube.com/embed/${video}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></CoverImg>

                  <ConWrap>
                    <Title>{details.title}</Title>
                    <ListWrap>
                      장르:
                      {details.genres.map((genre) => (
                        <List>&nbsp;&nbsp;{genre.name}, </List>
                      ))}
                    </ListWrap>
                    런타임, 개봉일, 오버뷰
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
