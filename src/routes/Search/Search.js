import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { moviesApi } from "../../api";
import { PageLoading } from "../../components/PageLoading";
import { Section } from "../../components/Section";
import { PageError } from "../Home/PageError";
import { PageTitle } from "../../components/PageTitle";

const Container = styled.div`
  margin-top: 150px;
`;

const Form = styled.form``;

const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 20px;
  border: 1px solid #555;
  &::placeholder {
    font-size: 20px;
  }
  font-size: 20px;
`;

const SearchWrap = styled.div`
  width: 100%;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 50px;
  column-gap: 20px;
`;

const Con = styled.div``;

const Bg = styled.div`
  /* width: 315px; */
  height: 180px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    margin-top: 10px;
  }
`;

export const Search = () => {
  const [searchResult, setSearchResult] = useState();
  const [noSearch, setNoSearch] = useState("");
  const [pageError, setPageError] = useState(false);
  const [loading, setLoading] = useState(true);

  const { register, getValues, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = async () => {
    const { term } = getValues();

    try {
      const {
        data: { results },
      } = await moviesApi.search(term);

      if (results.length <= 0) {
        setNoSearch("검색결과가 없습니다 🤔");
      } else {
        setNoSearch("");
        setSearchResult(results);
      }

      setLoading(false);
    } catch (error) {
      setPageError(true);
    }
  };

  return (
    <div>
      <PageTitle title={"검색"} />
      <Section>
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("term", {
                required: true,
              })}
              type="text"
              placeholder="검색..."
            />
          </Form>

          {pageError ? (
            <PageError />
          ) : (
            <>
              <SearchWrap>
                {searchResult && loading ? (
                  <PageLoading />
                ) : (
                  <>
                    {noSearch === "" ? (
                      searchResult &&
                      searchResult.map((term) => (
                        <Link key={term.id} to={`/detail/${term.id}`}>
                          <Con>
                            <Bg
                              style={{
                                background: `url(${
                                  term.backdrop_path
                                    ? `https://image.tmdb.org/t/p/original${term.backdrop_path}`
                                    : "https://i.ytimg.com/vi/5SuveFZ5_H0/maxresdefault.jpg"
                                }) center / cover`,
                              }}
                            />
                            <Title>{term.title}</Title>
                          </Con>
                        </Link>
                      ))
                    ) : (
                      <h1>{noSearch}</h1>
                    )}
                  </>
                )}
              </SearchWrap>
            </>
          )}
        </Container>
      </Section>
    </div>
  );
};
