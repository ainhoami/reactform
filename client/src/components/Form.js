import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import { useTrainerrequest } from "../hooks";

export default (props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [goals, setGoals] = useState([]);
  const [callDate, setCallDate] = useState("");
  const [freeInfo, setFreeInfo] = useState("");
  const [validated, setValidated] = useState(false);

  const { addTrainer } = useTrainerrequest();
  function handleChecks(e) {
    if (e.target.checked) {
      setGoals([...goals, e.target.value]);
    } else {
      setGoals(goals.filter((filt) => filt !== e.target.value));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === false) {
      setValidated(true);
      e.stopPropagation();
      setValidated(false);
    }
    setValidated(true);

    const formData = {
      firstName,
      lastName,
      email,
      phoneNumber,
      gender,
      age,
      goals,
      callDate,
      freeInfo,
    };

    if (e.currentTarget.checkValidity() === true) {
      addTrainer(formData);
      props.history.push("/thx");
    }
  }

  return (
    <>
      <Container fluid className="bgimage bg-dark position-sticky">
        <Container className="bg-white pt-2 min-vh-100 ct2 border border-bottom-0 border-top-0 ">
          <Row className="justify-content-md-center ">
            <h1 className="pb-2">Personal Trainer Request</h1>
            <Col lg="9">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h4 className="mb-2">Personal Information</h4>
                <Form.Row>
                  {["First Name", "Last Name", "Email", "Phone"].map(
                    (tx, i) => (
                      <Form.Group as={Col} md="6" key={tx + i}>
                        <Form.Label>{tx}</Form.Label>
                        <Form.Control
                          required
                          className="border border-dark"
                          type="text"
                          placeholder={tx}
                          name={tx}
                          value={
                            i === 0
                              ? firstName
                              : i === 1
                              ? lastName
                              : i === 2
                              ? email
                              : phoneNumber
                          }
                          onChange={(e) =>
                            i === 0
                              ? setFirstName(e.target.value)
                              : i === 1
                              ? setLastName(e.target.value)
                              : i === 2
                              ? setEmail(e.target.value)
                              : setPhoneNumber(e.target.value)
                          }
                        />
                        <Form.Control.Feedback type="invalid">
                          This field is required.
                        </Form.Control.Feedback>
                      </Form.Group>
                    )
                  )}
                </Form.Row>

                <Form.Row className="mt-1">
                  <Form.Group as={Col} sm="6">
                    <h4 className="mb-3">Gender</h4>
                    {["Male", "Female", "Other"].map((ge, i) => (
                      <Form.Check
                        inline
                        type="radio"
                        key={i + "r"}
                        name="genderRadio"
                        id={`radio-${i}`}
                        label={ge}
                        value={ge.toLowerCase()}
                        onChange={(e) => setGender(e.target.value)}
                      />
                    ))}
                  </Form.Group>
                  <Form.Group as={Col} md="3" nogutters="true" className="mb-0">
                    <DropdownButton
                      id="dropdown-basic-button"
                      title={
                        age !== "" ? "Age range: " + age : "What's your age"
                      }
                      variant="light"
                      onSelect={(e) => setAge(e)}
                    >
                      {["18-24", "25-34", "35-44", "45-54", "55+"].map(
                        (ag, i) => (
                          <Dropdown.Item key={i + "ag"} eventKey={ag}>
                            {ag}
                          </Dropdown.Item>
                        )
                      )}
                    </DropdownButton>
                  </Form.Group>
                </Form.Row>
                <hr />
                <h4 className="mb-3">What are your goals?</h4>
                <Form.Row>
                  <Form.Group as={Col} sm="6">
                    {[
                      "Get in Shape",
                      "Lose Weight",
                      "10k Run",
                      "Get Stronger",
                    ].map((goal, i) => (
                      <Form.Check
                        type="checkbox"
                        key={i + "r"}
                        name="goalCheck"
                        id={`check-${i}`}
                        label={goal}
                        value={goal}
                        onChange={handleChecks}
                      />
                    ))}
                  </Form.Group>
                  <Form.Group as={Col} sm="6">
                    {[
                      "Eat Double",
                      "Fitness Competition",
                      "Burpees with my Great Grandmother",
                      "American Ninja Warrior",
                    ].map((goal, i) => (
                      <Form.Check
                        type="checkbox"
                        key={i + "r"}
                        name="goalCheck"
                        id={`check-${i + 4}`}
                        label={goal}
                        value={goal}
                        onChange={handleChecks}
                      />
                    ))}
                  </Form.Group>
                </Form.Row>
                <hr />
                <Form.Row>
                  <Form.Group as={Col} md="12">
                    <h4 className="mb-3">
                      What day would you like us to contact you?
                    </h4>
                    <Form.Control
                      required
                      type="date"
                      name="firstName"
                      value={callDate}
                      onChange={(e) => setCallDate(e.target.value)}
                      className="border border-dark"
                    />
                    <Form.Control.Feedback type="invalid">
                      Date is required.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <hr />
                <Form.Row>
                  <Form.Group as={Col} md="12">
                    <h4 className="mb-3">
                      Tell us a little bit more about yourself
                    </h4>

                    <Form.Control
                      as="textarea"
                      rows="3"
                      name="txtareafree"
                      value={freeInfo}
                      onChange={(e) => setFreeInfo(e.target.value)}
                      className="border border-dark"
                    />
                  </Form.Group>
                </Form.Row>
                <Button variant="purple" block size="lg" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
