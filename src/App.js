import React from "react";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import HomePage from './components/HomePage';
import WeekView from "./components/WeekView";

function App() {
  return (
  <Fragment>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/week-view" element={<WeekView/>}/>
    </Routes>
  </Fragment>
  );
}

export default App;
