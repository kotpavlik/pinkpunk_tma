import type { Component } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import MainScreen from './main_screen/MainScreen';
import { NotFounded } from './404/NotFounded';
import { TonConnectUIProvider } from '@tonconnect/ui-react';


const App: Component = () => {
  return (
    <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
      <Router>
        <Route path="/" component={MainScreen} />
        <Route path="*404" component={NotFounded} />
      </Router>
    </TonConnectUIProvider>
  );
};

export default App;
