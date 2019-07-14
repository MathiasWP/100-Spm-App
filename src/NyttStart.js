import React from "react";
import { Component } from "react-simplified";
import "./Main.css";
import { Card, Modal, Button } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";

import drekkamer from "./drekkamer.jpg";

import $ from "jquery";

import createHashHistory from "history/createHashHistory";
const history = createHashHistory(); // Use history.push(...) to programmatically change path, for instance after successfully saving a student

class NyttStart extends Component {
  nyespm = [
    "Hvem spiser sine egne buser",
    "Hvem sitter for mye på telefonen sin",
    "Hvem er minst musikalsk",
    "Hvem hadde overlevd lengst på en øde øy",
    "Hvem er flinkest til å danse",
    "Hvem tror hun/han kan synge, men kan egentlig ikke det",
    "Hvem har styggest tattovering",
    "Hvem har finest tattovering",
    "Hvem kler langt hår best",
    "Hvem har lengst hår på tissen",
    "Hvem har mest hår i rumpa",
    'Hvem er litt for stor fan av "Har du donglebær i rumpa" fra Raske Menn',
    "Hvem burde sjekke seg for kjønnsykdommer",
    "Hvem reiser mest",
    "Hvem liker minst å reise",
    "Hvem blir lettest bilsjuk",
    "Hvem er mest redd for å fly",
    "Hvem kommer til å dø i en ulykke",
    "Hvem kunne vært programleder på barne-tv",
    "Hvem hater gutter",
    "Hvem hater jenter",
    "Hvem hater katter",
    "Hvem hater hunder",
    "Hvem er mest redd for edderkopper",
    "Hvem tror alt hun/han leser på nettet",
    "Hvem kunne spist en mordersnegle for 500kr",
    "Hvem kommer til å flytte fra Norge",
    "Hvem kunne ha mistet en baby i bakken",
    "Hvem kommer til å bli forelder først",
    "Hvem kommer til å være singel hele livet",
    "Hvem kommer til å bli statsminister",
    "Hvem kunne spilt i pornofilm",
    "Hvem kommer til å bli feit først som voksen",
    "Hvem kommer til å dø først",
    "Hvem kommer til å gifte seg først",
    "Hvem kommer til å bli millionær",
    "Hvem kunne mest sannsynlig blitt en uteligger",
    "Hvem skryter mest",
    "Hvem kommer til å dø ugift",
    "Hvem kommer til å ende opp singel med leiligheten full av katter",
    "Hvem er flinkest til å spille fotball",
    "Hvem er mest stolt over kroppen sin",
    "Hvem ligner mest på Shrek",
    "Hvem ligner mest på Fiona (fra Shrek)",
    "Hvem er dummest",
    "Hvem tror hun/han er smartere enn alle andre",
    "Hvem har dårligst musikksmak",
    "Hvem har best musikksmak",
    "Hvem har de fineste puppene",
    "Hvem har det styggeste skjegget",
    "Hvem har den fineste rumpa",
    "Hvem har sittet på glattcelle",
    "Hvem er mest Game of Thrones nørd",
    "Hvem er mest lik Staysmann",
    "Hvem kommer til å være med på Paradise Hotel",
    "Hvem kunne vært med på Ex on the Beach",
    "Hvem har flest ekser",
    "Hvem er svigermors drøm",
    "Hvem er svigerfars drøm",
    "Hvem kunne mest sannsynlig endt opp på omgjustdont",
    "Hvem kunne vært utro",
    "Hvem har gulest piss ",
    "Hvem kunne rana en bank",
    "Hvem kunne ha ligget med søteren/broren sin",
    "Hvem fikk laveste karakterene på videregående",
    "Hvem bruker mest tid på Netflix",
    "Hvem bruker mest tid på HBO",
    "Hvem trenger hjelp for å fyre i peisen",
    "Hvem klarer ikke koke spaghetti",
    "Hvem klarer ikke skjære brødskiva ordentlig",
    "Hvem er den minst tiltrekkende",
    "Hvem er rikest",
    "Hvem bruker mest penger på klær",
    "Hvem bruker mest tid på badet",
    "Hvem er mest ute i naturen",
    "Hvem lager best mat",
    "Hvem er mest glad i hunder",
    "Hvem trener mest",
    "Hvem trener minst",
    "Hvem har lagt på seg det siste året",
    "Hvem har hatt flest kjønnsykdommer",
    "Hvem bruker mest penger på drikke",
    "Hvem blir mest fyllesyk",
    "Hvem har gått på den største smellen",
    "Hvem er mest usunn",
    "Hvem er sunnest",
    "Hvem har dårligst kondis",
    "Hvem krangler mest med foreldrene sine",
    "Hvem tenker mest på sex",
    "Hvem tror de har draget",
    "Hvem har lengst streak på snap",
    "Hvem har færrest streaks på snap",
    "Hvem er flinkest til å svømme",
    "Hvem fikk dårligst karakter i gym",
    "Hvem hadde tatt en kule for kjæledyret sitt",
    "Hvem hadde svikta vennene sine for penger  ",
    "Hvem bryr seg for mye om materialisme",
    "Hvem sitter lengst på do ",
    "Hvem er mest uhygeniesk",
    "Hvem er snillest mot kassedama i butikken",
    "Hvem bruker mest penger på spill",
    "Hvem er finest uten sminke",
    "Hvem er guttemagnet",
    "Hvem sprer beina lettest",
    "Hvem onanerte igår",
    "Hvem er kjedeligst på fest",
    "Hvem drikker alltid minst",
    "Hvem er mest fjortis full",
    "Hvem lyver",
    "Hvem er snillest",
    "Hvem kunne du ligget med",
    "Hvem har de fineste øynene",
    "Hvem ler styggest",
    "Hvem er mest gavmild",
    "Hvem har ligget med flest utlendinger",
    "Hvem er smartest",
    "Hvem er mest sosial dum",
    "Hvem burde klippe seg",
    "Hvem er mest høylytt i senga",
    "Om du ble sjef i et firma, hvem ville du ansatt først",
    "Hvem har finest klesstil",
    "Hvem er mest opptatt av utseende",
    "Hvem skulle du ønske du var bedre kjent med",
    "Hvem blir mest drita ikveld",
    "Hvem ville du bytta liv med",
    "Hvem har en dilf",
    "Hvem har en milf",
    "Hvem får flest på kroken",
    "Hvem sniker seg alltid ut av vanskelige situasjoner",
    "Hvem tar ansvar",
    "Hvem er morsomst",
    "Hvem tror hun/han er morsomst",
    "Hvem spyr i kveld",
    "Hvem er mest pliktoppfyllende",
    "Hvem setter vennene sine foran en selv",
    "Hvem har bitchblikket",
    "Hvem tror de er smartest",
    "Hvem har oftest sex",
    "Hvem er mest rappkjefta",
    "Hvem er beste kysser",
    "Hvem er den største pingla",
    "Hvem er den største drama Queen/King",
    "Hvem holder ut lengst i senga",
    "Hvem får orgasme raskest",
    "Hvem er mest sannsynlig til å prompe under sex",
    "Hvem kunne ha skreket feil navn under sex",
    "Hvem kunne tatt med en fra samme kjønn hjem fra byen",
    "Hvem liker best å få den i 2'ern",
    "Hvem har sex med sokker på",
    "Hvem bytter truse for sjeldent",
    "Hvem kjører oftest over fartsgrensen",
    "Hvem fiser mest",
    "Hvem lever et dobbeltliv",
    "Hvem er mest babe",
    "Hvem er mest hunk",
    "Hvem er mest følsom",
    "Hvem gråter aldri",
    "Har vi en brannbil her",
    "Hvem er mobber mest",
    "Hvem blir mobbet",
    "Hvem tror hun/han er sjefen i gjengen",
    "Hvem er kløne i trafikken",
    "Hvem tror hun/ han er best i trafikken",
    "Hvem danser best",
    "Hvem faller fortest «in love»",
    "Hvem lar du styre musikken på vors",
    "Hvem er mest pervers her",
    "Hvem sender lettest nakenbilde på snap",
    "Hvem er best i Fifa",
    "Hvem har flest nudes på telefonen sin",
    "Hvem er den mest kresne her",
    "Hvem spiser for mye",
    "Hvem drikker for mye",
    "Hvem trener for mye",
    "Hvem tilbringer heller en kveld hjemme med mor og far enn med venna",
    "Hvem trener for lite"
  ];
  gamlespm = [];
  number = 0;
  state = {
    border: "",
    show: false
  };
  render() {
    return (
      <div className="Spill">
        <IoIosArrowBack
          size="3em"
          color="white"
          className="tilbake"
          onClick={this.tilbake}
        />
        <Card
          style={{ width: "18rem", height: "22rem" }}
          className="kort"
          onClick={this.neste}
          border={this.state.border}
        >
          <Card.Header>
            Spørsmål nr: <span id="nr" />
          </Card.Header>
          <Card.Body>
            <Card.Title id="spm">Klikk for å starte spillet.</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">trykk for neste</small>
          </Card.Footer>
        </Card>

        <Modal
          onClick={this.handleClose}
          show={this.state.show}
          onHide={this.handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title>NÅ SKAL DET DREKKAS!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>
              Nå har dere passert {this.number - 1} spørsmål, så drikk{" "}
              {(this.number - 1) / 10}
              <span id="slurker" />
            </h2>
            <img src={drekkamer} className="gif" alt="Drekka mer" />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              className="fortsett"
              onClick={this.handleClose}
            >
              fortsett med spørsmålene
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="ferdig" style={{ color: "white" }}>
          <h1>100 SPØRSMÅL PASSERT!</h1>
          <h3>
            NÅ ER SPILLET FERDIG. DRIKK DE SISTE 10 SLURKENE DERES OG NYT
            KVELDEN
          </h3>
          <Button style={{ marginTop: "30px" }} onClick={this.tilbake}>
            tilbake til forsiden
          </Button>
        </div>
      </div>
    );
  }

  mounted() {
    $(".ferdig").hide();
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  neste() {
    document.querySelector(".kort").classList.toggle("kortAnimation");

    setTimeout(() => {
      this.number++;
      document.getElementById("nr").innerHTML = this.number;

      let i = Math.floor(Math.random() * this.nyespm.length);

      document.getElementById("spm").innerHTML = `<h3>${this.nyespm[i]}?</h3>`;
      this.gamlespm.push(this.nyespm[i]);
      this.nyespm.splice(i, 1);

      if (this.number === 11) {
        this.setState({ border: "primary" });
        this.setState({ show: true });
        document.getElementById("slurker").innerHTML = ` slurk!`;
      }
      if (this.number === 21) {
        this.setState({ border: "success" });
        this.setState({ show: true });
        document.getElementById("slurker").innerHTML = ` slurker!`;
      }
      if (this.number === 31) {
        this.setState({ border: "warning" });
        this.setState({ show: true });
        document.getElementById("slurker").innerHTML = ` slurker!`;
      }
      if (this.number === 41) {
        this.setState({ border: "info" });
        this.setState({ show: true });
        document.getElementById("slurker").innerHTML = ` slurker!`;
      }
      if (this.number === 51) {
        this.setState({ border: "danger" });
        this.setState({ show: true });
        document.getElementById("slurker").innerHTML = ` slurker!`;
      }
      if (this.number === 61) {
        this.setState({ border: "primary" });
        this.setState({ show: true });
        document.getElementById("slurker").innerHTML = ` slurker!`;
      }
      if (this.number === 71) {
        this.setState({ border: "success" });
        this.setState({ show: true });
        document.getElementById("slurker").innerHTML = ` slurker!`;
      }
      if (this.number === 81) {
        this.setState({ border: "warning" });
        this.setState({ show: true });
        document.getElementById("slurker").innerHTML = ` slurker!`;
      }
      if (this.number === 91) {
        this.setState({ border: "info" });
        this.setState({ show: true });
        document.getElementById("slurker").innerHTML = ` slurker!`;
      }
      if (this.number === 101) {
        $(".kort").hide();
        $(".ferdig").show();
      }
    }, 250);
  }

  tilbake() {
    history.push("/menu");
  }
}

export default NyttStart;
