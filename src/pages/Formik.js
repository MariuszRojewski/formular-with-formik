import React from "react";
import { Formik, Field, Form } from "formik";
import { Row, Col, Container } from "react-bootstrap";

// 181. LISTING 4.26.

const runFormik = ({ props }) => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>Witamy przy kasie!</h1>
          <h2>Podaj dane do wysyłki:</h2>
        </Col>
      </Row>

      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          street: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Row>
            <Col xs={12} md={4}>
              <label htmlFor="firstname">Imię</label>
              <Field name="firstname" id="firstname" />
            </Col>
            <Col xs={12} md={4}>
              <label htmlFor="lastname">Nazwisko</label>
              <Field name="lastname" id="lastname" />
            </Col>
            <Col xs={12} md={4}>
              <label htmlFor="street">Ulica</label>
              <Field name="street" id="street" />
            </Col>
            <Col xs={12} className="mt-2">
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Wyślij
              </button>
            </Col>
          </Row>
        </Form>
      </Formik>
    </Container>
  );
};
export default runFormik;
