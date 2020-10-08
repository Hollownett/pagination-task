import React from "react";
import { Switch, Route } from "react-router-dom";
import Peoples from "./components/Peoples/Peoples";
import Planets from "./components/Planets/Planets";
import "./App.css";
import { Header } from "./components/Header/Heder";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={"/"} component={Peoples} />
        <Route path={"/planets"} component={Planets} />
      </Switch>
    </div>
  );
}

export default App;
