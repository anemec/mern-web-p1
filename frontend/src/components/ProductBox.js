import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Card } from 'react-bootstrap';

const ProductBox = ({
  box: { _id, name, category, products, image, description },
}) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/box/${_id}`}>
        <Card.Img
          src={`${process.env.PUBLIC_URL}/assets/${image}`}
          className='pImg'
        />
      </Link>
      <Card.Body>
        <Card.Title>
          <strong>{name}</strong>
        </Card.Title>
        <Card.Subtitle>{description}</Card.Subtitle>
      </Card.Body>
      <LinkContainer to={`/box/${_id}`}>
        <Button variant='salmon'>Subscribe</Button>
      </LinkContainer>
    </Card>
  );
};

export default ProductBox;
