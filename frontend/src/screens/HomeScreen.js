import React from "react";
import { Row, Col } from "react-bootstrap";
import { data } from "../data";

import ProductBox from "../components/ProductBox";

const HomeScreen = () => {
  return (
    <>
      <h1>Current Boxes</h1>
      <Row className="row">
        {data.boxes.map((item) => (
          <Col sm={12} md={6} lg={4}>
            <ProductBox box={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
