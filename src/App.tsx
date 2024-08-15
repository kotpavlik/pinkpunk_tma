import type { Component } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import { NotFounded } from './404/NotFounded';
import WebApp from '@twa-dev/sdk'
import { TonConnectPage } from './main_screen/MainScreen';

WebApp.ready();

const App: Component = () => {
  return (

    <Router>
      <Route path="/" component={TonConnectPage} />
      <Route path="*404" component={NotFounded} />
    </Router>

  );
};

export default App;
