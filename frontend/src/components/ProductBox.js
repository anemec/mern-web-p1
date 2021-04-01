import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const ProductBox = ({ box: { name, category, items, image } }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to='/product/3'>
        <Card.Img
          src={`${process.env.PUBLIC_URL}/assets/${image}`}
          className='pImg'
        />
      </Link>
      <Card.Body>
        <Card.Title>
          <strong>{name}</strong>
        </Card.Title>
        <Card.Subtitle>{category}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default ProductBox;
