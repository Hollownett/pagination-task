import React from "react";
import PropTypes from "prop-types"
import InfiniteScroll from 'react-infinite-scroll-component';
import './People.css';

export const  People = (props) => {
const {name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, img } = props 
 return(
    <div className="dataContainer">
    <h2>{name}</h2>
    <img src={img} width="100%" height="100%"/>
    <h3>height:{height}
     <br></br>
     mass: {mass}
     <br></br>
     hair color: {hair_color}
     <br></br>
     skin color: {skin_color} 
     <br></br>
     eye_color: {eye_color} 
     <br></br>
     birth_year: {birth_year}
     <br></br>
     gender: {gender}
     <br></br>
     homeworld: {homeworld}
   </h3>
 </div>
 )
}

People.propTypes = {
    name: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    hair_color: PropTypes.string,
    skin_color: PropTypes.string,
    eye_color: PropTypes.string, 
    birth_year: PropTypes.string,
    gender: PropTypes.string, 
    homeworld: PropTypes.string,
}
