import React from "react";

import "./App.scss";

import SvgNight from "./components/others/SvgNight";
import DayNightMode from "./components/dayNightMode/DayNightMode";
import Form from "./components/form/Form";
import TailsLanguages from "./components/tailsLanguages/TailsLanguages";

const App = () => {
  return (
    <div className="app">
      <SvgNight />
      <DayNightMode />
      <main className="app__main">
        <Form />
        <TailsLanguages />
      </main>
    </div>
  );
};

export default App;
