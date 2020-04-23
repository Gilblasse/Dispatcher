import React, { Component } from 'react';
import SideBarContainer from './sideBarContainer.';
import MapContainer from './mapContainer';
import {Row, Col } from 'react-bootstrap'
// import Navigation from "../components/navigation";

class MainContainer extends Component {
  render() {
    return (
      <div>
        {/* <Row>
          <Col sm={12} >
            <header>
              <Navigation/>
            </header>
          </Col>
        </Row> */}
            <Row>
                <Col md={{order: 12, span: 6}} style={{padding: 0}}>
                    <MapContainer/> 
                </Col>

                <Col md={{order: 1, span: 4 }} style={{padding: 0}}>
                    <SideBarContainer/> 
                </Col>
            </Row>
      </div>
    );
  }
}

export default MainContainer;
