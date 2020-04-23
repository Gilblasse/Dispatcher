import React from "react";
import "../node_modules/@fortawesome/fontawesome-pro/css/all.css";
import "./App.css";
import { Route, Switch } from "react-router";

import Navigation from "./components/navigation";
import MainContainer from "./containers/mainContainer";

function App() {
  return (
      <div>
        <header>
            <Navigation/>
        </header>

          <Switch>
            <Route path="/" component={MainContainer} />
          </Switch>

      </div>
  );
}

export default App;
