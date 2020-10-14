import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { People } from "./People/People";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import { PeoplesContainer } from "./components"

const Peoples = () => {
  const [data, setData] = useState({
    people: [],
  });
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handlePeopleFromApi(`people/?page=${page}`);
  }, [page]);

  const handlePeopleFromApi = async (url) => {
    try {
      let morePeople = await API.get(url);
      morePeople = morePeople.data.results;
      await Promise.all(
        morePeople.map(async (item) => {
          item.homeworld = await handleHomeWorld(item.homeworld);
        })
      );
      setData({ people: data.people.concat(morePeople) });
    } catch (e) {
      console.log(e);
    }
  };

  const handlePage = () => {
    if (page <= 8) setPage((page) => page + 1);
    else setHasMore(false);
  };

  const handleHomeWorld = async (world) => {
    try {
      let homeWorld = await API.get(world);
      homeWorld = homeWorld.data.name;
      return homeWorld;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PeoplesContainer>
      <InfiniteScroll
        dataLength={data.people.length}
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
            <b>End of persons...</b>
          </p>
        }
      >
        {data.people.map((item, index) => {
          return (
            <People
              key={index}
              name={item.name}
              height={item.height}
              mass={item.mass}
              hair_color={item.hair_color}
              skin_color={item.skin_color}
              eye_color={item.eye_color}
              birth_year={item.birth_year}
              gender={item.gender}
              homeworld={item.homeworld}
              img={item.img}
            />
          );
        })}
      </InfiniteScroll>
    </PeoplesContainer>
  );
};

export default Peoples;
