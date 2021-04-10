import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBoxDetails } from '../actions/boxActions';
import { Image } from 'react-bootstrap';

const BoxScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products, name, description, category, image } = useSelector(
    (state) => state.boxDetails
  );

  useEffect(() => {
    dispatch(getBoxDetails(id));
  }, [dispatch]);

  return (
    <>
      <h1>{name}</h1>
      <ul>{products && products.map((item) => <li>{item}</li>)}</ul>
      <h2>{description}</h2>
      <h2>{category}</h2>
      <Image src={`${process.env.PUBLIC_URL}/assets/${image}`} fluid />
    </>
  );
};

export default BoxScreen;
