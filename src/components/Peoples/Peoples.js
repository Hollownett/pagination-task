import React, { useState, useEffect, useRef } from "react";
import API from "../../utils/API";
import axios from "axios"
import { People } from "./People/People";
import InfiniteScroll from 'react-infinite-scroll-component';
import "./Peoples.css";

const Peoples = () => {
  const [data, setData] = useState({
    people: [],
  });

  const [page, setPage] = useState(1);
  const loader = useRef(null);

  // useEffect(() => {
  //   handlePeopleFromApi(`people/?page=${page}`);
  // }, [page]);

  // useEffect(() => {
  //   let options = {
  //     root: null,
  //     rootMargin: "20px",
  //     threshold: 1.0,
  //   };
  //   const observer = new IntersectionObserver(handleObserver, options);
  //   if (loader.current) {
  //     observer.observe(loader.current);
  //   }
  // }, []);

  // const handleObserver = (entities) => {
  //   const target = entities[0];
  //   if (target.isIntersecting) {
  //     setPage((page) => page + 1);
  //   }
  // };

  const handlePeopleFromApi = async (url) => {
    let morePeople = await API.get(url);
    morePeople = morePeople.data.results;
    await Promise.all(
      morePeople.map(async (item) => {
        item.homeworld = await handleHomeWorld(item.homeworld);
       /// item.image = await handlePeopleImage(item.name); add debounce
      })
    );
    setData({ people: data.people.concat(morePeople) });
    setPage((page) => page + 1);
  };

  const handleHomeWorld = async (world) => {
    let homeWorld = await API.get(world);
    homeWorld = homeWorld.data.name;
    return homeWorld;
  };
  
  const handlePeopleImage = async (name) =>{
        let image = await axios.get("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",{
        headers: {
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"contextualwebsearch-websearch-v1.p.rapidapi.com",
        "x-rapidapi-key":"db11f0862amsh3d2966aa8fd2ddfp186d2ajsn3ac8755ec269",
        "useQueryString":true
        },params: {
        "pageNumber":"1",
        "pageSize":"1",
        "q":`${name}`,
        "autoCorrect":"false"
        }}
        )
        image = image.data.value[0].url;
       return image;
  }
  return (
    <div className="Peoples-container">
      <h1> HI, SWAPI</h1>
      <InfiniteScroll
        dataLength={data.people.length}
        next={ handlePeopleFromApi(`people/`)}
        style={{ display: 'flex', flexDirection: 'column', alignItems: "center" }} //To put endMessage and loader to the top.
        inverse={false} 
        hasMore={true}
        loader={<h4 style={{color: "white"}}>Loading...</h4>}
        scrollableTarget="Peoples-container"
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
      
      {/* <div ref={loader}>
        <h1>Loadig...</h1>
      </div> */}
    </div>
  );
};

export default Peoples;
