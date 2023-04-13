import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./App.css";
import { Button, Col, Container, Form, Navbar, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
function App() {
  const [rangevalue, setRange] = useState(95);
  const ranger = (e) => {
    setRange(e.target.value);
  };
  const [weightvalue, setWeight] = useState(100);
  const weigther = (e) => {
    setWeight(e.target.value);
  };
  const [fontvalue, setFont] = useState("Roboto");
  const fonter = (e) => {
    setFont(e.target.value);
  };
  const [linevalue, setLine] = useState(0.9);
  const liner = (e) => {
    setLine(e.target.value);
  };
  const [spacevalue, setSpace] = useState(0);
  const spacer = (e) => {
    setSpace(e.target.value);
  };
  const [italicvalue, setSItalic] = useState(0);
  const italicer = (e) => {
    setSItalic(e.target.value);
  };
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <>
      <Navbar sticky bgColor="white" className="ps-3 shadow-sm">
        <Container fluid>
          <Navbar.Brand>
            <TypeAnimation
              className="text-dark"
              tag="strong"
              href="#"
              speed={25}
              sequence={["Georgian Fonnter", 3000, "", 800]}
              repeat={Infinity}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <Col className="sidebar p-4 col-2">
            <Form.Label>Font Family</Form.Label>
            <Form.Select
              aria-label="Choose Font Weight"
              value={fontvalue}
              onChange={fonter}
            >
              <option value="roboto">Roboto</option>
              <option value="fantasy">Fantasy</option>
              <option value="cursive">Cursive</option>
              <option value="emoji">Emoji</option>
              <option value="inherit">Inherit</option>
              <option value="sans-serif">Sans-serif</option>
            </Form.Select>
            <br />
            <Form.Label>Font Weight</Form.Label>
            <Form.Select
              aria-label="Choose Font Weight"
              value={weightvalue}
              onChange={weigther}
            >
              <option value="100">Thin</option>
              <option value="400">Regular</option>
              <option value="500">Medium</option>
              <option value="600">Semibold</option>
              <option value="750">Bold</option>
              <option value="900">Black</option>
            </Form.Select>
            <hr />
            <Form.Label>Font Size {rangevalue}</Form.Label>
            <Form.Range
              value={rangevalue}
              onChange={ranger}
              min="10"
              max="800"
            />
            <Form.Label>Line Height {linevalue}</Form.Label>
            <Form.Range
              value={linevalue}
              onChange={liner}
              min="0"
              max="1.7"
              step="0.1"
            />
            <Form.Label>Letter Spacing {spacevalue}</Form.Label>
            <Form.Range
              value={spacevalue}
              onChange={spacer}
              min="-0.1"
              max="0.1"
              step="0.01"
            />
            <Form.Label>Letter Italic {italicvalue}</Form.Label>
            <Form.Range
              value={italicvalue}
              onChange={italicer}
              min="0"
              max="100"
              step="0.1"
            />
            <hr />
            <div className="d-grid gap-2">
              <Button
              download
              href="https://fonts.google.com/download?family=Roboto"
                variant="primary"
                size="lg"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Downloading…" : "Download This Font"}
              </Button>
            </div>
          </Col>
          <Col
            size={10}
            className="App col-10"
            contentEditable="true"
            spellCheck="false"
          >
            <div
              id="target"
              style={{
                fontSize: `${rangevalue}px`,
                fontWeight: `${weightvalue}`,
                fontFamily: `${fontvalue}`,
                lineHeight: `${linevalue}`,
                letterSpacing: `${spacevalue}em`,
                fontStyle: `oblique ${italicvalue}deg`,
              }}
            >
              AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzabcdefghijklmnopqrstuvwxyzÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöùúûüýþÿ1234567890¼½¾
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
