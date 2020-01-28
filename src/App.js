import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Switch, Route } from "react-router-dom";

function findPalette(id) {
  return seedColors.find(palette => {
    return palette.id === id;
  });
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <h1>Palette Lists go here</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
      </Switch>

      {/* <Palette palette={generatePalette(seedColors[4])} /> */}
    </div>
  );
}

export default App;
