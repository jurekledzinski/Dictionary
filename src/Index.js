import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import registerServiceWorker from "./serviceWorkerRegister";

import "./index.scss";

import StoreProvider from "./store/StoreProvider";
import PageNotFound from "./components/others/PageNotFound";
import SvgLoaderPage from "./components/others/SvgPageLoader";

const App = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./App")), 7000);
  });
});

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <Suspense fallback={<SvgLoaderPage />}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="*" component={PageNotFound} />{" "}
          </Switch>
        </Suspense>{" "}
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

registerServiceWorker();
