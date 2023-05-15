import React, { useEffect, useState } from "react";
import Details from "./components/Details/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import APIStuff from "./components/APIStuff/APIStuff";

const App = () => {
  let routes = (
    <Routes>
      <Route path="/" element={<APIStuff />} />
      <Route path="/:showId/" element={<Details />} />
    </Routes>
  );

  return (
    <>
      <Router>
        <main>{routes}</main>
      </Router>
    </>
  );
};

export default App;
