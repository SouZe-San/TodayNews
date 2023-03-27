import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Newsbox from "./components/newsblock/Newsbox";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  // Set the page size..
  const [progress, setProgress] = useState(0); //--> For Loading bar process

  // Now Routing The Navigation ----
  return (
    <div className="App grid">
      <Router>
        <NavBar />
        <LoadingBar height={2} color="#fc5f05" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Newsbox key="general" setProgress={setProgress} category="general" />}
          />
          <Route
            exact
            path="/sports"
            element={<Newsbox key="sports" setProgress={setProgress} category="sports " />}
          />
          <Route
            exact
            path="/science"
            element={<Newsbox key="science" setProgress={setProgress} category="science" />}
          />
          <Route
            exact
            path="/business"
            element={<Newsbox key="business" setProgress={setProgress} category="business" />}
          />
          <Route
            exact
            path="/technology"
            element={<Newsbox key="technology" setProgress={setProgress} category="technology" />}
          />
          <Route
            exact // direct the url if fully match with the path
            path="/entertainment"
            element={
              <Newsbox
                pageSize={9} // the number of news articles
                key="entertainment"
                setProgress={setProgress} // sending the progress of BAR
                category="entertainment"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
