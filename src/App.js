import React, { useContext } from "react";

import "./App.scss";

import { StoreContext } from "./store/StoreProvider";

import SvgDay from "./components/others/SvgDay";
import SvgNight from "./components/others/SvgNight";
import DayNightMode from "./components/dayNightMode/DayNightMode";
import Form from "./components/form/Form";
import TailsLanguages from "./components/tailsLanguages/TailsLanguages";

const App = () => {
  const { flagToggle } = useContext(StoreContext);

  return (
    <div className="app">
      {flagToggle ? <SvgNight /> : <SvgDay />}
      <DayNightMode />
      <main className="app__main">
        <Form />
        <TailsLanguages />
      </main>
    </div>
  );
};

export default App;
