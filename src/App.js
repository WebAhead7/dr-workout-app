import React from "react";
import { Route, Switch } from "react-router-dom";
import Categories from "./pages/WorkoutCategories";
import Workout from "./pages/Workout";

function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route exact path="/workout/:category" component={Workout} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
