import React from "react";
import { Home } from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/">
          <Home />
        </Route>
      </div>
    </Router>
  );
}

export default App;
