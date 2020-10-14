import React from "react";
import PropTypes from "prop-types";
import { PlanetDataContainer } from "./components"

export const Planet = (props) => {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
    resident,
    img,
  } = props;

  return (
    <PlanetDataContainer>
      <h1>{name}</h1>
      <img src={img} width="100%" height="100%" />
      <ul>
      <li>rotation period:<b>{rotation_period}</b></li>
      <li>orbital period: <b>{orbital_period}</b></li>
      <li>diameter <b>{diameter}</b></li>
      <li>gravity <b>{gravity}</b></li>
      <li>climate: <b>{climate} </b></li>
      <li>terrain: <b>{terrain}</b></li>
      <li>surface water: <b>{surface_water}</b></li>
      <li>population: <b>{population}</b></li>
      <li>residents:
         {resident.length > 0 ? <ol>{resident.map((item, index) => (
            <li key={index}> {item}</li>
          ))}</ol> : " none" }
      </li>
      </ul>
 
    </PlanetDataContainer>
  );
};

Planet.propTypes = {
  name: PropTypes.string,
  rotation_period: PropTypes.string,
  orbital_period: PropTypes.string,
  diameter: PropTypes.string,
  climate: PropTypes.string,
  gravity: PropTypes.string,
  terrain: PropTypes.string,
  surface_water: PropTypes.string,
  population: PropTypes.string,
  resident: PropTypes.array,
};
