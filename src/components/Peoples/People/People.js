import React from "react";
import PropTypes from "prop-types";
import { PeopleContainer } from "./components"

export const People = (props) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
    homeworld,
    img,
  } = props;
  return (
    <PeopleContainer>
      <h2>{name}</h2>
      <img src={img} width="100%" height="100%" />
      <ul>
      <li>height:<b>{height}</b></li>
      <li>mass:<b>{mass}</b></li>
      <li>hair color: <b>{hair_color}</b></li>
      <li>skin color: <b>{skin_color}</b></li>
      <li>eye_color: <b>{eye_color}</b></li>
      <li>birth_year: <b>{birth_year}</b></li>
      <li> gender: <b>{gender}</b></li>
      <li>homeworld: <b>{homeworld}</b></li>
      </ul>
    </PeopleContainer>
  );
};

People.propTypes = {
  name: PropTypes.string,
  height: PropTypes.string,
  mass: PropTypes.string,
  hair_color: PropTypes.string,
  skin_color: PropTypes.string,
  eye_color: PropTypes.string,
  birth_year: PropTypes.string,
  gender: PropTypes.string,
  homeworld: PropTypes.object,
};
