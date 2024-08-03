import type { Component } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import MainScreen from './main_screen/MainScreen';
import { NotFounded } from './404/NotFounded';



const App: Component = () => {
  return (

    <Router>
      <Route path="/" component={MainScreen} />
      <Route path="*404" component={NotFounded} />
    </Router>

  );
};

export default App;
