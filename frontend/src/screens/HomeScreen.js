import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
// import { data } from "../data";
import { listBoxes } from "../actions/boxActions";

import ProductBox from "../components/ProductBox";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const boxList = useSelector((state) => state.boxList);

  useEffect(() => {
    dispatch(listBoxes());
  }, [dispatch]);

  return (
    <>
      <h1>Current Boxes</h1>
      <Row className="pt-1 row">
        {boxList.length > 0 &&
          boxList.map((item) => (
            <Col
              key={item.name}
              sm={12}
              md={12}
              lg={4}
              className="d-flex justify-content-center"
            >
              <ProductBox box={item} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default HomeScreen;
