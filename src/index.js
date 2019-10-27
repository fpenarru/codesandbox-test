import React from "react";
import ReactDOM from "react-dom";
import MainMenu from "./components/MainMenu";
import CenterPanel from "./components/CenterPanel";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <MainMenu />
      {/* <div className="container" > */}
      <h1 className="jumbotron">Header1</h1>
      <h2>My Header 2</h2>
      <CenterPanel />
      {/* </div> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
