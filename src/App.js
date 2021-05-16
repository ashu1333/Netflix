import React from "react";
import Home from "./Components/Home/Home";
import Signin from "./Components/Signin/Signin";
import { Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Content from "./Components/Browse/Content/Content";
import Detail from "./Components/Browse/Detail/Detail";
import MyList from "./Components/Browse/MyList/MyList";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/signin">
          <Signin />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route exact path="/browse">
          <Content />
        </Route>

        <Route path="/browse/mylist">
          <MyList />
        </Route>

        <Route exact path="/browse/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
