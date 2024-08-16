import type { Component } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import { NotFounded } from './pages/404/NotFounded';
import WebApp from '@twa-dev/sdk'
import { TonConnectPage } from './pages/main_screen/MainScreen';


WebApp.ready();

const App: Component = () => {
  return (
    <div class='w-screen h-svh relative '>
      <Router>
        <Route path="/" component={TonConnectPage} />
        <Route path="*404" component={NotFounded} />
      </Router>
    </div>

  );
};

export default App;
