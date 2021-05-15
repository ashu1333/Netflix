import React from "react";
import Home from "./Components/Home/Home";
import Signin from "./Components/Signin/Signin";
import { Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Content from "./Components/Browse/Content/Content";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/signin">
          <Signin />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/browse">
          <Content />
        </Route>

        <Route path="/browse/detail/:id">
          <Content />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
