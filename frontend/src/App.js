import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";

import BoxScreen from "./screens/BoxScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="p-3">
        <Container className="mc" fluid>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/box/:id">
            <BoxScreen />
          </Route>
        </Container>
      </main>
    </Router>
  );
};

export default App;
