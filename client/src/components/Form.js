import React, { useState } from "react";
// import { useAdmins} from '../hooks'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import validator from "validator";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { FormCheck } from "react-bootstrap";

export default (props) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("N/A");
  console.log(email, firstName, lastName, phoneNumber);
  console.log(gender, "gender");
  console.log(age, "age");

  return (
    <>
      <div className="ProfloginHouseContainerP">
        <FontAwesomeIcon icon="coffee" />
        <FontAwesomeIcon icon={["fab", "apple"]} />
        <FontAwesomeIcon icon={["fas", "arrow-circle-right"]} />
        holi
      </div>
      <form>
        <input type="text" />
        <Button variant="primary">Primary</Button> <br />
        <Button variant="outline-success">Success</Button>{" "}
      </form>

      <h1>blablablablablabla</h1>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="9">
            <Form>
              <h4>Contact Information</h4>
              <Form.Row>
                <Form.Group as={Col} md="6">
                  <Form.Label className="text-primary">First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border border-info"
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="6">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md="6">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>
              </Form.Row>
<hr/>
              <Form.Row className="mt-1">
                <Form.Group as={Col} sm="6">
                  <h4>Gender</h4>
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
                    title="What's your age"
                    variant="success"
                    // value={age}
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
                <Form.Group as={Col} md="3">
                  <p className="sm-mt-0 mt-1">Range Selected: {age}</p>
                </Form.Group>
              </Form.Row>
              <hr/>
              <Form.Row>
              <Form.Group as={Col} md="12">
            
              <Form.Label className="text-primary">What are your goals?</Form.Label>
              <p>aqui checkbox</p>
                </Form.Group>
              </Form.Row>
              <hr/>
              <Form.Row>
              <Form.Group as={Col} md="12">
              <Form.Label className="text-primary">When would you like us to contact?</Form.Label>
              <Form.Control
                    type="date"
                    // placeholder="First Name"
                    name="firstName"
                    // value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                    className="border border-info"
                  />
                </Form.Group>
              </Form.Row>
              <hr/>
              <Form.Row>
              <Form.Group as={Col} md="12">
            
              <Form.Label className="text-primary">Tell us a little bit more about yourself</Form.Label>
              <p>aqui text area</p>
                </Form.Group>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
