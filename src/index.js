import { React, Component } from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card";
import Form from "./components/Form";

import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="leftSide">
          <Card />
        </div>
        <div className="rightSide">
          <Form />
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
