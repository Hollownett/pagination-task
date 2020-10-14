import styled from "styled-components"
import { NavLink } from "react-router-dom";

export const AppHeader = styled.nav`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-content: center;
   align-items: center;
   background-color: #666666;
   width: 100%;
   height: 80px;
`

export const HeaderButton = styled.button`
  width: 100px;
  height: 100%;
  background-color: #333333;
  font-size: 18px;
  color:  white;
  text-decoration: none;
`

export const AppTitle = styled.h1`
  color: #e6e600;
  font-size: 36px;
  margin-left: 30px;
`
export const HeaderButtonsContainer = styled.div`
  height: 100%;
`

export const HederLink = styled(NavLink)`
`