import React from "react";
import { Component } from "react-simplified";
import "./Main.css";
import { Card, Button, Modal } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import $ from "jquery";

import drekkamer from "./drekkamer.jpg";

import createHashHistory from "history/createHashHistory";
const history = createHashHistory(); // Use history.push(...) to programmatically change path, for instance after successfully saving a student

class EgetStart extends Component {
  nyespm = [];
  gamlespm = [];
  betaSpm = [];
  number = 0;
  state = {
    border: "",
    show: false
  };
  render() {
    return (
      <div className="Spill">
        <div className="popup">
          <Card style={{ width: "95%", margin: "auto" }}>
            <Card.Header as="h5">Skriv inn spørsmål</Card.Header>
            <Card.Body>
              <Card.Title>
                Skriv inn dine spørsmål her <br />
                (skill hvert spm med{" "}
                <select
                  onChange={this.antallSpm}
                  type="text"
                  id="inputvalg"
                  style={{ width: "60px", textAlign: "center" }}
                >
                  <option value="?">? </option>
                  <option value="-">-</option>
                  <option value="/">/</option>
                  <option value=",">,</option>
                  <option value=".">.</option>
                  <option value="!">!</option>
                </select>
                - tegnet)
              </Card.Title>
              <Card.Text>
                <textarea
                  id="input"
                  rows="10"
                  cols="50"
                  placeholder="Skriv inn her..."
                  onChange={this.antallSpm}
                  style={{ width: "100%" }}
                />
              </Card.Text>
              <p id="ant" />
              <Button variant="primary" onClick={this.kjorIgang}>
                Start spillet
              </Button>
            </Card.Body>
          </Card>
        </div>
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
          <h1>{this.betaSpm.length - 1} SPØRSMÅL PASSERT!</h1>
          <h3>
            NÅ ER SPILLET FERDIG. DRIKK DE SISTE{" "}
            {Math.floor(this.betaSpm.length / 10) + 1} SLURKENE DERES OG NYT
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
    $(".kort").hide();
    $(".ferdig").hide();
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  antallSpm() {
    this.betaSpm = document
      .getElementById("input")
      .value.split(`${document.getElementById("inputvalg").value}`);

    document.getElementById("ant").innerHTML = `Antall spørsmål: <b>${this
      .betaSpm.length - 1}</b>`;
  }

  kjorIgang() {
    if (this.betaSpm.length - 1 === 0 || this.betaSpm.length === 0) {
      alert("Kan ikke spille uten spørsmål");
    } else if (document.getElementById("inputvalg").value.length < 1) {
      alert("Velg hvilket tegn som skal skille spørsmålene");
    } else if (
      this.betaSpm.length - 1 > 100 &&
      document.getElementById("inputvalg").value.length >= 1
    ) {
      alert(
        `Det er en grunn til at spillet heter 100 spørsmål og ikke ${this
          .betaSpm.length - 1} spørsmål
            `
      );
    } else {
      this.nyespm = document
        .getElementById("input")
        .value.split(`${document.getElementById("inputvalg").value}`);

      this.nyespm.pop();

      $(".popup").hide();
      $(".kort").show();
    }
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
      if (this.number === this.betaSpm.length) {
        $(".kort").hide();
        $(".ferdig").show();
      }
    }, 250);
  }

  tilbake() {
    history.push("/menu");
  }
}

export default EgetStart;
