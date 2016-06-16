import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../styles/instructions.scss';
import { Link } from 'react-router';
export default class Header extends Component {
  render() {
    return (
      <section className="page-header">
        <Row>
          <Col xs={4} xsOffset={4} sm={2} smOffset={5}>
            <object type="image/svg+xml" className="img-responsive diagram" data="../../img/CityBookLogo.svg">
              <img src="../../img/CityBookLogo.png" alt="No SVG support" />
            </object>
          </Col>
        </Row>
        <h1 className="project-name">CityBook</h1>
        <h2 className="project-tagline">Create a searchable, mobile-friendly contact list from a Google Spreadsheet.</h2>
        <a id="get-started-button" className="btn btn-header btn-lg">Get Started</a>
        <a href="#/books/6e45a6e5-d6b5-4b71-a6d8-16138f9b4ad2" target="_blank" className="btn btn-header btn-lg">Demo</a>
      </section>
    );
  }
}
