import React,{useState, useEffect, useRef} from 'react';
import API from "./utils/API";
import { People } from "./components/People/People"
import './App.css';

function App() {
  const [data, setData] = useState({
    people: [],
  });
  
  const [page, setPage] = useState(1);
  const loader  = useRef(null);

  useEffect(() => {
    handlePeopleFromApi(`people/?page=${page}`);
  },[page])

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
   };
   const observer = new IntersectionObserver(handleObserver, options);
   if (loader.current) {
      observer.observe(loader.current)
   }
  },[])

 const handleObserver = (entities) => {
   const target = entities[0];
   if (target.isIntersecting) {   
    setPage((page) => page + 1)
}
 }

  const handlePeopleFromApi = async (url) => {
       let morePeople = await API.get(url);
       morePeople =  morePeople.data.results;
       await Promise.all( morePeople.map( async (item) => {
          item.homeworld = await handleHomeWorld(item.homeworld)
        }));
       setData({people: data.people.concat(morePeople)});
  }
  
  const handleHomeWorld =  async (world) => { 
      let homeWorld = await API.get(world);
      homeWorld = homeWorld.data.name;
      return homeWorld;
  }
  
  return (
    <div className="App">
        <h1> HI, SWAPI</h1>
        {data.people.map((item, index) => {
          return (<People key={index} name={item.name} height={item.height} mass={item.mass} hair_color={item.hair_color} skin_color={item.skin_color} eye_color={item.eye_color} birth_year={item.birth_year} gender={item.gender} homeworld={item.homeworld} />)
        })}
        <div ref={loader}>
          <h1>Loadig...</h1>
        </div>
    </div>
  );
}

export default App;
