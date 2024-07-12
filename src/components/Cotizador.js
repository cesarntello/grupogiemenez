// src/components/Cotizador.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const Cotizador = () => {
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const apiKey = "72d26242-b083-4b67-a775-5a45f7f56742"; // Tu API key

  useEffect(() => {
    // Fetch brands from the High Mobility API
    fetch("https://sandbox.api.high-mobility.com/v1/vehicle-data/brands", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBrands(data.brands); // Ajusta esto según la estructura de la respuesta
      })
      .catch((error) => console.error("Error fetching brands:", error));
  }, [apiKey]);

  useEffect(() => {
    if (selectedBrand) {
      // Fetch models based on selected brand
      fetch(
        `https://sandbox.api.high-mobility.com/v1/vehicle-data/brands/${selectedBrand}/models`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setModels(data.models); // Ajusta esto según la estructura de la respuesta
        })
        .catch((error) => console.error("Error fetching models:", error));
    }
  }, [selectedBrand, apiKey]);

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
  };

  return (
    <Container style={{ marginTop: "350px" }}>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formBrand">
              <Form.Label>Marca del Auto</Form.Label>
              <Form.Control as="select" onChange={handleBrandChange}>
                <option value="">Seleccione una marca</option>
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            {selectedBrand && (
              <Form.Group controlId="formModel" style={{ marginTop: "20px" }}>
                <Form.Label>Modelo del Auto</Form.Label>
                <Form.Control as="select">
                  <option value="">Seleccione un modelo</option>
                  {models.map((model) => (
                    <option key={model.id} value={model.id}>
                      {model.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Cotizador;
