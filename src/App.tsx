import React from "react";
import { Container } from "react-bootstrap";
import { Dashboard } from "./components/Dashboard";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <Container fluid>
      <SideBar />
      <Dashboard />
    </Container>
  );
}

export default App;
