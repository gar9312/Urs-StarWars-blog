import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const AddContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to a backend)
    console.log('Form submitted:', formData);
  };

  return (
    <Container className="text-left mt-5">
    <Form onSubmit={handleSubmit}>
      <h2 className="text-center mb-4">Add a new contact</h2>
      <Row className="mb-3">
        <Col md={12}>
          <Form.Group controlId="formFullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="Enter phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={12}>
          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Save
      </Button>
      <a href="/contact">
        or get back to contacts
     </a>
    </Form>
    </Container>
  );
};

export default AddContactForm;