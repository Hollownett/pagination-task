import React from "react";
import { Switch, Route } from "react-router-dom";
import Peoples from "../components/Peoples/Peoples";
import Planets from "../components/Planets/Planets";
import { App as AppContainer } from "./components";
import { Header } from "../components/Header/Heder";
import Films from "../components/Films/Films";
import * as route from "../constants/routes"

function App() {
  return ( 
    < AppContainer>
      <Header />
      <Switch>
        <Route exact path={route.PEOPLES_ROUTE} component={Peoples} />
        <Route path={route.PLANETS_ROUTE} component={Planets} />
        <Route path={route.FILMS_ROUTE} component={Films} />
      </Switch>
      </ AppContainer>
  );
}

export default App;
