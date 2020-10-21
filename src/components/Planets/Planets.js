import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Planet } from "./Planet/Planet"
import InfiniteScroll from "react-infinite-scroll-component"
import Loader from "react-loader-spinner"
import { PlanetsContainer } from "./components"
import { getPlanetsRequest } from "../../actions/actions"

const Planets = () => {
  const planets =  useSelector(state => state.planets.planets)
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getPlanetsRequest(page))
  }, [page]);

  const handlePage = () => {
    if (page <= 8) setPage((page) => page + 1);
    else setHasMore(false);
  };

  return (
    <PlanetsContainer>
      <InfiniteScroll
        dataLength={planets.length}
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
        {planets.map((item, index) => {
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
              resident={item.residents}
            />
          );
        })}
      </InfiniteScroll>
    </PlanetsContainer>
  );
};

export default Planets;
