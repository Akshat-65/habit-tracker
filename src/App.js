import React from "react";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Homepage from "./components/Homepage";
import WeekView from "./components/WeekView";

function App() {
  return (
  <Fragment>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/week-view" element={<WeekView/>}/>
    </Routes>
  </Fragment>
  );
}

export default App;
