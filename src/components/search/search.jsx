import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Table from "./Table";

function Search() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Search />, rootElement);
