import React from "react";
import { Switch, Route } from "react-router-dom";
import Peoples from "../components/Peoples/Peoples";
import Planets from "../components/Planets/Planets";
import { App as AppContainer } from "./components";
import { Header } from "../components/Header/Heder";
import Films from "../components/Films/Films";

function App() {
  return ( 
    < AppContainer>
      <Header />
      <Switch>
        <Route exact path={"/"} component={Peoples} />
        <Route path={"/planets"} component={Planets} />
        <Route path={"/films"} component={Films} />
      </Switch>
      </ AppContainer>
  );
}

export default App;
