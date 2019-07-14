import React from "react";
import { Component } from "react-simplified";

import hundre from "./100tittel.png";

import "./Main.css";
import { Button } from "react-bootstrap";

import createHashHistory from "history/createHashHistory";
const history = createHashHistory(); // Use history.push(...) to programmatically change path, for instance after successfully saving a student

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <img width="260px" alt="100" src={hundre} /> spørsmål
          </p>
        </header>

        <Button
          variant="outline-light"
          size="lg"
          onClick={this.nyttRoute}
          className="start"
        >
          Nytt spill
        </Button>
        <Button
          variant="outline-light"
          size="lg"
          onClick={this.egetRoute}
          className="start topmargin"
        >
          Eget spill
        </Button>

        <code id="meg">Laget av Mathias Picker</code>
      </div>
    );
  }

  nyttRoute() {
    history.push("/nyttspill");
  }
  egetRoute() {
    history.push("/egetspill");
  }
}

export default App;
