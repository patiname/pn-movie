import styled from "styled-components";

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

export const CoverVideo = ({ video, img }) => {
  return (
    <>
      {video === "" ? (
        <CoverImg
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${img})`,
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
    </>
  );
};
