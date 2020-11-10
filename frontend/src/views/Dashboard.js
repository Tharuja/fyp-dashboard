/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardTitle,
  Modal,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
} from "variables/charts.js";

import { Player } from 'video-react';
import "E:/PMS/front-end/node_modules/video-react/dist/video-react.css"; // import css

class Index extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1", 
      videos:[{poster:"https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=678&h=381", src:"https://media.w3.org/2010/05/sintel/trailer_hd.mp4"},
      {poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgRZ-8dgiOkvWfQMIN3F4AmxHD5WKYh2YLQA&usqp=CAU", src:"http://media.w3.org/2010/05/bunny/trailer.mp4"},
      {poster:"https://i.insider.com/5484d9d1eab8ea3017b17e29?width=1100&format=jpeg&auto=webp", src:"http://media.w3.org/2010/05/bunny/movie.mp4"},
      {poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJuO9aOlsHBu6EtxWVooQBjHp8I-Nlek2I6w&usqp=CAU", src:"http://media.w3.org/2010/05/bunny/movie.mp4"},
    ]
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }


  render() {

    const vidoeList = this.state.videos.map(video =>
      <Col>
        <Player
          playsInline
          poster={video.poster}
          src={video.src}
        />
        <Button className="my-4" color="Secondary" type="button"> Select video </Button> 
      </Col>
    );

    return (
      <>
        {/* Card List */}
        <div className="header bg-gradient-success pb-8 pt-5 pt-md-8">
          <Container fluid>
            <div className="header-body">
            <Row>
              {vidoeList}
            </Row>
            </div>
          </Container>
        </div>
        
      </>
    );
  }
}

export default Index;
