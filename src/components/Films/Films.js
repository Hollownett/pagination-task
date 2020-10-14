import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Film } from "./Film/Film";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import { FilmsContainer } from "./components"

const Films = () => {
  const [data, setData] = useState({
    film: [],
  });

  useEffect(() => {
    handleFilmsFromApi(`films/`);
  }, []);

  const handleFilmsFromApi = async (url) => {
    try {
      let moreFilm = await API.get(url);
      moreFilm = moreFilm.data.results;
      await Promise.all(
        moreFilm.map(async (item) => {
          item.persons = await handleCharacters(item.characters);
          item.planet = await handlePlanets(item.planets);
        })
      );
      setData({ film: data.film.concat(moreFilm) });
    } catch (e) {
      console.log(e);
    }
  };

  const handleCharacters = async (persons) => {
    const filmPersons = [];
    try {
      await Promise.all(
      persons.map( async (person) => {
        let filmPerson = await API.get(person);
        filmPersons.push(filmPerson.data.name);
      }))
      return filmPersons;
    } catch (e) {
      console.log(e);
    }
  };
   
  const handlePlanets = async (planets) => {
    const filmPlanets = [];
    try {
      await Promise.all(
      planets.map( async (planet) => {
        let filmPlanet = await API.get(planet);
        filmPlanets.push(filmPlanet.data.name);
      }))
      return filmPlanets;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FilmsContainer>
      <InfiniteScroll
        dataLength={data.film.length}
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
        {data.film.map((item, index) => {
          return (
            <Film
              key={index}
              title={item.title}
              episode_id={item.episode_id}
              opening_crawl={item.opening_crawl}
              director={item.director}
              producer={item.producer}
              release_date={item.release_date}
              person={item.persons}
              planet={item.planet}
            />
          );
        })}
      </InfiniteScroll>
    </FilmsContainer>
  );
};

export default Films;
