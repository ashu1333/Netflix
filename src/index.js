import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { firebaseApp } from "./firebase";
import { FirebaseContext } from "./Context/firebase_context";
import { StateProvider } from "./StateProvider/StateProvider";
import reducer, { initialState } from "./StateProvider/reducer";

ReactDOM.render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <FirebaseContext.Provider value={{ firebaseApp }}>
        <App />
      </FirebaseContext.Provider>
    </StateProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
