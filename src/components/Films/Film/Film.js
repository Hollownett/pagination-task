import React from "react";
import PropTypes from "prop-types";
import { FilmDataContainer } from "./components"

export const Film = (props) => {
  const {
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
    person,
    planet,
    img,
  } = props;

  return (
    <FilmDataContainer>
      <h1>{title}</h1>
      <img src={img} width="100%" height="100%" alt="film image"/>
      <ul>
      <li>episode :<b>{episode_id}</b></li>
      <li>opening : <b>{opening_crawl}</b></li>
      <li>director <b>{director}</b></li>
      <li>producer: <b>{producer} </b></li>
      <li>release_date: <b>{release_date}</b></li>
      <li>characters:
         {person.length > 0 ? <ol>{person.map((item, index) => (
            <li key={index}> {item}</li>
          ))}</ol> : " none" }
      </li>
      <li>planets:
         {planet.length > 0 ? <ol>{planet.map((item, index) => (
            <li key={index}> {item}</li>
          ))}</ol> : " none" }
      </li>
      </ul>
 
    </FilmDataContainer>
  );
};

Film.propTypes = {
  title: PropTypes.string,
  episode_id: PropTypes.string,
  opening_crawl: PropTypes.string,
  director: PropTypes.string,
  producer: PropTypes.string,
  release_date: PropTypes.string,
  person: PropTypes.array,
  planet: PropTypes.array,
};
