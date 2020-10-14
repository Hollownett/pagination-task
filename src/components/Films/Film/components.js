import styled from "styled-components"

export const FilmDataContainer  = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: gainsboro;
  -webkit-box-shadow: 0px 3px 18px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 18px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 18px 1px blue;
  border-radius: 10px;
  margin: 10px;
  opacity: 0.7;
 ul{
     width: 90%;
     list-style: none;
     text-align: left;
     font-size: 24px;
 }
 ul > ol {
  text-align: left;
 }
`