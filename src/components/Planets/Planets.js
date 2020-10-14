import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Planet } from "./Planet/Planet";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import { PlanetsContainer } from "./components"

const Planets = () => {
  const [data, setData] = useState({
    planet: [],
  });
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handlePlanetsFromApi(`planets/?page=${page}`);
  }, [page]);

  const handlePlanetsFromApi = async (url) => {
    try {
      let morePlanet = await API.get(url);
      morePlanet = morePlanet.data.results;
      await Promise.all(
        morePlanet.map(async (item) => {
          item.resident = await handleResidetns(item.residents);
        })
      );
      setData({ planet: data.planet.concat(morePlanet) });
    } catch (e) {
      console.log(e);
    }
  };

  const handlePage = () => {
    if (page <= 8) setPage((page) => page + 1);
    else setHasMore(false);
  };

  const handleResidetns = async (residents) => {
    const planetResidents = [];
    try {
      await Promise.all(
      residents.map( async (resident) => {
        let planetResident = await API.get(resident);
        planetResidents.push(planetResident.data.name);
      }))
      return planetResidents;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PlanetsContainer>
      <InfiniteScroll
        dataLength={data.planet.length}
        next={handlePage}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        inverse={false}
        hasMore={hasMore}
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
            <b>End of planets...</b>
          </p>
        }
      >
        {data.planet.map((item, index) => {
          return (
            <Planet
              key={index}
              name={item.name}
              rotation_period={item.rotation_period}
              orbital_period={item.orbital_period}
              diameter={item.diameter}
              climate={item.climate}
              gravity={item.gravity}
              terrain={item.terrain}
              surface_water = {item.surface_water}
              population = {item.population}
              resident={item.resident}
            />
          );
        })}
      </InfiniteScroll>
    </PlanetsContainer>
  );
};

export default Planets;
