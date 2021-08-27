import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { moviesApi } from "../../api";
import { PageLoading } from "../../components/PageLoading";
import { Section } from "../../components/Section";
import { PageError } from "../Home/PageError";
import { PageTitle } from "../../components/PageTitle";
import { CoverVideo } from "./CoverVideo";
import { DetailCon } from "./DetailCon";

const Container = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    flex-direction: column;
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

  // console.log(details);

  return (
    <div>
      <PageTitle title={details && details.title} />
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
                  {console.log(details?.backdrop_path)}
                  <CoverVideo video={video} img={details?.backdrop_path} />

                  <DetailCon
                    title={details.title}
                    release_date={details.release_date}
                    genres={details.genres}
                    runtime={details.runtime}
                    overview={details.overview}
                  />

                  {/* <ConWrap>
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
                  </ConWrap> */}
                </Container>
              ) : null}
            </Section>
          )}
        </div>
      )}
    </div>
  );
};
