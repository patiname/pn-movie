import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { moviesApi } from "../../api";

export const Detail = () => {
  const { movieId } = useParams();

  useEffect(() => {
    const detailData = async () => {
      console.log(await moviesApi.detail(movieId));
    };
    detailData();
  }, []);

  return <div>detail</div>;
};
