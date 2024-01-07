import React from "react";
import {Provider} from "react-redux";
import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import Todos from "./component/Todos";
const App=()=> {
  return (
   
      <Provider store={store}>
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h3>React Redux</h3>
      <Todos />
    </div>
    </Provider>
  );
}

export default App;
