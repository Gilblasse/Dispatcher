import React, { Component } from 'react';
import SideBarContainer from './sideBarContainer.';
import MapContainer from './mapContainer';
import {Row, Col } from 'react-bootstrap'

class MainContainer extends Component {
  render() {
    return (
      <div>
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
