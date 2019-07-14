import React from "react";
import { Component } from "react-simplified";

import hundre from "./100tittel.png";

import "./Main.css";
import { Button } from "react-bootstrap";

import createHashHistory from "history/createHashHistory";
const history = createHashHistory(); // Use history.push(...) to programmatically change path, for instance after successfully saving a student

class EgetSpill extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <img width="180px" alt="100" src={hundre} /> spørsmål
          </p>
        </header>
        <p className="undertittel">EGET SPILL</p>
        <Button
          variant="success"
          size="lg"
          onClick={this.startRoute}
          className="start"
        >
          START
        </Button>
        <Button
          variant="outline-light"
          size="lg"
          onClick={this.hjemRoute}
          className="tilbakemenu"
        >
          tilbake
        </Button>
      </div>
    );
  }

  startRoute() {
    history.push("/egetstart");
  }
  hjemRoute() {
    history.push("/menu");
  }
}

export default EgetSpill;
