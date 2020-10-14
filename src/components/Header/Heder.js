import React from "react";
import { AppHeader, HeaderButton, HeaderButtonsContainer, AppTitle, HederLink } from "./components"

export const Header = (props) => {
  return (
    <AppHeader>
      <AppTitle>
        SWAPI
      </AppTitle>
      <HeaderButtonsContainer>
        <HederLink exact  to="/">
        <HeaderButton>
        People
        </HeaderButton>
       </HederLink>
      <HederLink exact to="/planets">
      <HeaderButton>
        Planets
       </HeaderButton>
      </HederLink>
      <HederLink exact to="/films">
      <HeaderButton>
        Films
       </HeaderButton>
      </HederLink>
      </HeaderButtonsContainer>
    </AppHeader>
  );
};
