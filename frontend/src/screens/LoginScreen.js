import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { login } from '../actions/userActions';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // alert('pressed');
    e.preventDefault();
    dispatch(login(email, password, checked));
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h1>Sign In</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
              {/* <Form.Text>
                We'll never share your email with anyone else
              </Form.Text> */}
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='rememberMe'>
              <Form.Check
                type='checkbox'
                label='Remember Me'
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </Form.Group>
            <Row>
              <Col>
                <Button type='submit' variant='primary' className='mx-3'>
                  Login
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to={'/register'}>
                  <Button className='m-3'>Register</Button>
                </Link>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
