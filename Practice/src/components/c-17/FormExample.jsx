import React, { useState } from "react";
import { Button, Form,Spinner } from "react-bootstrap";

const FormExample = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    web: "",
  });

  const [loading, setLoading] = useState(false);

  
  const handleFormData = (e) => {

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit= (e) => { 
    e.preventDefault();
    setLoading(true)

    setTimeout(() => {
        
        alert("Form Submitted Successfully")
        setLoading(false)
    },2000)




   }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formFirstName">
        <Form.Label>FirstName</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter firstname"
          name="firstName"
          value={formData.firstName}
          onChange={handleFormData}
          minLength={3}
          maxLength={33}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLastName">
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleFormData}
          minLength={3}
          maxLength={33}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Phone"
          name="phone"
          value={formData.phone}
          onChange={handleFormData}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleFormData}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formWeb">
        <Form.Label>Web</Form.Label>
        <Form.Control
          type="web"
          placeholder="Enter web adress"
          name="web"
          value={formData.web}
          onChange={handleFormData}
          required
        />
      </Form.Group>
      <Button variant="success" type="submit" disabled={loading}>
       {loading ? <Spinner animation="grow" variant="danger" /> : "Submit"}
       
      </Button>
    </Form>
  );
};

export default FormExample;