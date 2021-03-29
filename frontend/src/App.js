import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container className="mc">
          <h1>Hello</h1>
        </Container>
      </main>
    </Router>
  );
};

export default App;
