import React, { useState, useEffect } from "react";
import { getPopularMovies } from "../api/popular";
import styled from "styled-components";
import Card from "../components/movie/Card";
import Banner from "../components/movie/Banner";
import { useInfiniteQuery } from "@tanstack/react-query";

const MoviePage = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  max-width: 1260px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 30px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const ButtonMore = styled.button`
  position: relative;
  padding: 14px;
  width: 100%;
  background-color: var(--primary-color);
  border-radius: 8px;
  transition: background-color 0.3s ease;
  color: #fff;

  &:hover {
    background-color: var(--primary-darken-color);
  }

  @media (max-width: 768px) {
    padding: 10px;
    border-radius: 6px;
  }
`;

const Popular = () => {
  const fetchPopular = async ({ pageParam = 1 }) => {
    const popularData = await getPopularMovies(pageParam);
    return { data: popularData, nextPage: pageParam + 1 };
  };

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["popular"],
    queryFn: fetchPopular,
    getNextPageParam: (lastPage) => {
      return lastPage.data.length > 0 ? lastPage.nextPage : undefined;
    }
  })
  
  const movieList = data?.pages.flatMap((page) => page.data) || [];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Banner title={"인기 영화"} />

      <MoviePage>
        <MovieList>
          {movieList.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </MovieList>

        {hasNextPage && (
          <ButtonWrapper>
            <ButtonMore type="button" onClick={() => fetchNextPage()}>
              더 보기
            </ButtonMore>
          </ButtonWrapper>
        )}
      </MoviePage>
    </>
  );
};

export default Popular;