import React from "react";
import { Component } from "react-simplified";
import { Button } from "react-bootstrap";

import hundre from "./100tittel.png";
import velg1 from "./velg1.png";
import velg2 from "./velg2.jpg";

import "./Main.css";

import createHashHistory from "history/createHashHistory";
const history = createHashHistory(); // Use history.push(...) to programmatically change path, for instance after successfully saving a student

class FrontPage extends Component {
  render() {
    return (
      <div className="Frontpage">
        <header className="Frontpage-header">
          <p>
            <img width="234px" alt="100" src={hundre} /> spørsmål
          </p>
        </header>
        <div id="fronttekst">
          For best ytelse av applikasjonen, vennligst åpne nettsiden i Safari på
          iPhone/iPad/iPoden din.
          <br /> <br />
          Er du for lat eller orker ikke, så kan du trykke her for å komme
          videre til nettsiden: <br />
          <Button variant="outline-success" size="lg" onClick={this.send}>
            Gå videre
          </Button>
        </div>
        <div id="fronttekst2">
          Slik laster du ned appen: <br />
          <br />
          1:
          <br />
          <img id="velg1" alt="Velg først knappen i midten" src={velg1} />
          <br />
          <br />
          2:
          <br />
          <img id="velg2" alt='Trykk på "Legg til på hjemskjerm"' src={velg2} />
        </div>
      </div>
    );
  }

  mounted() {
    let front = document.getElementById("fronttekst");
    let front2 = document.getElementById("fronttekst2");

    let ua = window.navigator.userAgent;
    let iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    let webkit = !!ua.match(/WebKit/i);
    let iOSSafari = iOS && webkit && !ua.match(/CriOS/i);

    if (iOSSafari) {
      front.style.display = "none";
    } else {
      front2.style.display = "none";
    }
  }

  send() {
    history.push("/menu");
  }
}

export default FrontPage;
