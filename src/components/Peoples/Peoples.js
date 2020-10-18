import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { People } from "./People/People";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import { PeoplesContainer } from "./components"
import { getPeoples } from "../../actions/actions";

const Peoples = () => {
  const peoples =  useSelector(state => state.peoples.peoples)
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeoples(page))
  }, [page]);

  const handlePage = () => {
    if (page <= 8) setPage((page) => page + 1);
    else setHasMore(false);
  };

  return (
    <PeoplesContainer>
      <InfiniteScroll
        dataLength={peoples.length}
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
        {peoples.map((item, index) => {
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
