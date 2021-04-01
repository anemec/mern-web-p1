import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { data } from '../data';

import ProductBox from '../components/ProductBox';

const HomeScreen = () => {
  return (
    <>
      <h1>Current Boxes</h1>
      <Row className='pt-1 row'>
        {data.boxes.map((item) => (
          <Col
            key={item.name}
            sm={12}
            md={12}
            lg={4}
            className='d-flex justify-content-center'
          >
            <ProductBox box={item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
