import { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Newsbox from "./components/newsblock/Newsbox";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  // Set the page size..
  const pageSize = 5;
  const [progress, setProgress] = useState(0); //--> For Loading bar process

  // Now Routing The Navigation ----
  return (
    <div className="App grid">
      {/* <Router> */}
      <NavBar />
      <LoadingBar
        height={3} // Height of the bar in px
        color="#f11946" // Color of the loading bar
        progress={progress} // Set the progress ... the progress set in newBox Component
      />
      <Newsbox
        setProgress={setProgress}
        key="general"
        pageSize={pageSize}
        country="in"
        category="general"
      />

      {/* <Switch>
          <Route exact path="/">
            <Newsbox
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="in"
              category="general"
            />
          </Route>

          <Route exact path="/business">
            <Newsbox
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country="in"
              category="business"
            />
          </Route>

          <Route exact path="/entertainment">
            <Newsbox
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country="in"
              category="entertainment"
            />
          </Route>

          <Route exact path="/science">
            <Newsbox
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country="in"
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <Newsbox
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country="in"
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <Newsbox
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              country="in"
              category="technology"
            />
          </Route>
        </Switch> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
