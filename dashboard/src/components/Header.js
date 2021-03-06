import React from "react";
import { Row, Col, NavItem } from "reactstrap";

function Header(props) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yy = String(today.getFullYear());
  today = mm + "/" + dd + "/" + yy;

  var endDate = new Date(2020, 4, 24).toLocaleDateString().substring(0, 9);

  return (
    // <nav class="navbar navbar-light bg-light p-0">
    //   <Row className="">
    //     <Col>
    //       <div class="navbar-brand col-sm-3 col-md-2 mr-0 p-2">Dashboard</div>
    //     </Col>
    //     <Col className="offset-2 p-2">{endDate}</Col>
    //     <Col className="offset-2 p-2">{today}</Col>
    //   </Row>
    // </nav>
    <nav class="navbar navbar-dark bg-dark flex-md-nowrap p-0">
      <div class="navbar-brand col-sm-3 col-md-2 mr-0">Dashboard</div>
      <div class="d-flex mr-auto text-primary">
        <div class="order-1 px-3">{endDate}</div>
        <div class="order-2 px-2">{today}</div>
      </div>
    </nav>
  );
}

export default Header;
