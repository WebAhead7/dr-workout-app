import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Categories from './pages/WorkoutCategories';
import Workout from './pages/Workout';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/workout/:category" component={Workout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
