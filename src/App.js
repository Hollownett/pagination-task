import React,{useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    people: [],
  });
  const [page, setPage] = useState(1);
  const loader  = useRef(null);

  useEffect(() => {
    handleDataFromApi("https://swapi.dev/api/films/");
    console.log(data.people);
  },[page])

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
   };
  // initialize IntersectionObserver
  // and attaching to Load More div
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

  const handleDataFromApi = (url) => {
       fetch(url).then(response => {
        return response.json();
       }).then(peoples => {
       const newPeople =  data.people.concat(peoples.results)
          setData({
            people: newPeople,
          })
       })
  }
  
  return (
    <div className="App">
        <h1> HI, SWAPI</h1>
        {data.people.map((item, index) => (
          <div className="dataContainer" key={index}>
             {JSON.stringify(item)}
          </div>
        ))}
        <div ref={loader}>
          <h1>Loadig...</h1>
        </div>
    </div>
  );
}

export default App;
