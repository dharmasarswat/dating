import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Form,
  Row,
  Button,
  FloatingLabel,
  Alert,
} from "react-bootstrap";

const initialState = {
  name: "",
  phone: "",
  age: "",
  gender: "",
};

export default function Register() {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState(null);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);
  const handleChange = (e) => {
    setState((state) => ({ ...state, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  useEffect(() => {
    const isEmpty = Object.values(state)
      .map((values) => !values)
      .find((value) => value);
    setIsSubmitButtonDisabled(isEmpty);
  }, [state]);

  return (
    <Col md={5} className="ms-auto p-4 rounded">
      <Form className="form p-4 py-5 d-flex my-auto" onSubmit={handleSubmit}>
        <Container>
          <Row>
              {/* Hearder */}
            <Col md={12} className="mb-4">
              <h3 className="text-center text-primary">
                Register Now For Free
              </h3>
              <h6 className="text-center text-muted">
                It takes only few seconds to register.
              </h6>
            </Col>

            {/* show errors */}
            {errors && (
              <Col md={12}>
                <Alert
                  variant="danger"
                  onClose={() => setErrors(null)}
                  dismissible
                >
                  <p>{errors}</p>
                </Alert>
              </Col>
            )}

            {/* form inputs */}
            <Col md={12} className="mb-4">
              <Form.Floating>
                <Form.Control
                  placeholder="Enter your full name"
                  id="name"
                  type="text"
                  value={state.name}
                  onChange={handleChange}
                  required
                />
                <label className="text-muted" htmlFor="name">
                  Name
                </label>
              </Form.Floating>
            </Col>
            <Col md={12} className="mb-4">
              <Form.Floating>
                <Form.Control
                  id="phone"
                  type="tel"
                  placeholder="Enter your contact number"
                  value={state.phone}
                  onChange={handleChange}
                  required
                />
                <label className="text-muted" htmlFor="phone">
                  Contact number
                </label>
              </Form.Floating>
            </Col>
            <Col md={6} className="mb-4">
              <Form.Floating>
                <Form.Control
                  id="age"
                  type="number"
                  placeholder="Enter your age in years"
                  value={state.age}
                  onChange={handleChange}
                  required
                />
                <label className="text-muted" htmlFor="age">
                  Age
                </label>
              </Form.Floating>
            </Col>
            <Col md={6} className="ms-auto">
              <FloatingLabel label="Gender">
                <Form.Select
                  id="gender"
                  size="xl"
                  value={state.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">-</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Form.Select>
              </FloatingLabel>
            </Col>

            {/* Submit button */}
            <Button
              type="submit"
              className="w-50 m-auto mt-4 text-center"
              size="lg"
              disabled={isSubmitButtonDisabled}
            >
              Submit
            </Button>
          </Row>
        </Container>
      </Form>
    </Col>
  );
}
