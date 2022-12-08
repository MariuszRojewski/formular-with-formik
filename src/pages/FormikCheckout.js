import * as Yup from "yup";
import { Row, Col, Container } from "react-bootstrap";
import React from "react";
import { Formik, Form, useField, useFormikContext } from "formik";
import MySelect from "../Components/MySelect";
import MyInput from "../Components/MyInput";
import MyCheckbox from "../Components/MyCheckbox";
import MyTextarea from "../Components/MyTextArea";

// 193.

const FormikCheckout = ({ props }) => {
  const paymentOptions = [
    { id: "-", name: "----" },
    { id: "pp", name: "PayPal" },
    { id: "stripe", name: "Stripe" },
    { id: "cc", name: "Karta kredytowa" },
  ];

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Witamy przy kasie!</h1>
            <h2>Podaj dane do wysyłki:</h2>
          </Col>
        </Row>
      </Container>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          street: "",
          zip: "",
          city: "",
          paymentType: "",
          comment: "",
          gift: false,
        }}
        validationSchema={Yup.object({
          firstname: Yup.string()
            .min(2, "Imię musi posiadać minimum 2 znaki")
            .max(15, "Imię musi posiadać maksimum 15 znaków")
            .required("Pole wymagane"),
          lastname: Yup.string()
            .min(2, "Nazwisko musi posiadać minimum 2 znaki")
            .max(15, "Nazwisko musi posiadać maksimum 15 znaków")
            .required("Pole wymagane"),
          street: Yup.string()
            .min(2, "Ulica musi posiadać minimum 2 znaki")
            .max(15, "Ulica musi posiadać maksimum 15 znaków")
            .required("Pole wymagane"),
          zip: Yup.string()
            .min(2, "Kod pocztowy musi posiadać minimum 2 znaki")
            .max(15, "Kod pocztowy musi posiadać maksimum 6 znaków")
            .required("Pole wymagane"),
          city: Yup.string()
            .min(2, "Miasto musi posiadać minimum 2 znaki")
            .max(15, "Miasto musi posiadać maksimum 6 znaków")
            .required("Pole wymagane"),
          gift: Yup.boolean().required("Pole wymagane"),
          paymentType: Yup.string()
            .oneOf(
              ["Stripe", "PayPal", "Karta kredytowa"],
              "Niepoprawny typ płatności"
            )
            .required("Pole wymagane"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="w-100">
          <Container>
            <Row>
              <Col xs={12} md={4}>
                <MyInput
                  label="Imię"
                  name="firstname"
                  type="text"
                  className="form-control"
                />
              </Col>
              <Col xs={12} md={4}>
                <MyInput
                  label="Nazwisko"
                  name="lastname"
                  type="text"
                  className="form-control"
                />
              </Col>
              <Col xs={12} md={4}>
                <MyInput
                  label="Ulica i numer domu"
                  name="street"
                  type="text"
                  className="form-control"
                />
              </Col>
              <Col xs={12} md={4}>
                <MyInput
                  label="Kod pocztowy"
                  name="zip"
                  type="text"
                  className="form-control"
                />
              </Col>
              <Col xs={12} md={4}>
                <MyInput
                  label="Miasto"
                  name="city"
                  type="text"
                  className="form-control"
                />
              </Col>

              <Col xs={12} md={4}>
                <MySelect
                  label="Rodzaj płatności"
                  name="paymentType"
                  className="form-control"
                  options={paymentOptions}
                />
              </Col>
              <Col xs={12} md={4}>
                <MyTextarea
                  label="Komentarze"
                  name="comment"
                  className="form-control"
                />
              </Col>
              <Col xs={12} md={4}>
                <MyCheckbox
                  name="gift"
                  // className="form-control"
                  label="Zapakować na prezent?"
                />
              </Col>
              <Col xs={12}>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block mt-2"
                >
                  Wyślij
                </button>
              </Col>
            </Row>
          </Container>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikCheckout;
