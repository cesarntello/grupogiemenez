// src/components/NavBar.js
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/logo1.png";
import { Button } from "react-bootstrap";

import styled from "styled-components";
import { Link } from "react-router-dom";

const CustomButton = styled(Button)`
  background-color: #ff5733; /* Color de fondo personalizado */
  color: white; /* Color del texto */
  border: none; /* Sin borde */
  padding: 10px 30px; /* Padding personalizado para crear forma elíptica */
  font-size: 16px; /* Tamaño de la fuente personalizado */
  border-radius: 50px; /* Border radius grande para forma elíptica */
  transition: background-color 0.3s ease, color 0.3s ease; /* Transición suave */

  &:hover {
    background-color: white; /* Color de fondo para hover */
    color: #ff5733; /* Color del texto para hover */
  }

  &:focus {
    background-color: #cc4529; /* Color de fondo para focus */
  }
`;

const NavBar = () => {
  const styleBtn = {
    backgroundColor: "#1E90FF",
    color: "white",
    borderRadius: "50px",
    borderColor: "white",
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="40%"
              height="40%"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
        {/* <Container> */}
        <Nav className="me-auto">
          {/* <Navbar.Brand> */}
          <Link to="/" className="nav-link">
            Home
          </Link>
          {/* </Navbar.Brand> */}

          <Nav.Link href="#automotor">Automotor</Nav.Link>
          <Nav.Link href="#features">Civil</Nav.Link>
          <Nav.Link href="#pricing">Hogar</Nav.Link>
        </Nav>
        {/* </Container> */}
        <Container>
          <CustomButton>
            {" "}
            <Link to="/cotizador">Cotiza Tu seguro</Link>
          </CustomButton>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar; // Asegúrate de que esta línea exporte NavBar
