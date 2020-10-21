import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Film } from "./Film/Film";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import { FilmsContainer } from "./components"
import { getFilms } from "../../actions/actions";

const Films = () => {
  const films =  useSelector(state => state.films.films)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms())
  }, []);

 
  return (
    <FilmsContainer>
      <InfiniteScroll
        dataLength={films.length}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        inverse={false}
        hasMore={true}
        loader={
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        }
        endMessage={
          <p style={{ color: "white", textAlign: "center" }}>
            <b>End of films...</b>
          </p>
        }
      >
        {films.map((item, index) => {
          return (
            <Film
              key={index}
              title={item.title}
              episode_id={item.episode_id}
              opening_crawl={item.opening_crawl}
              director={item.director}
              producer={item.producer}
              release_date={item.release_date}
              person={item.characters}
              planet={item.planets}
            />
          );
        })}
      </InfiniteScroll>
    </FilmsContainer>
  );
};

export default Films;
