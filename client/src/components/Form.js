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
  // const [keyD, setKeyD] = useState("");

  // console.log(email, firstName, lastName, phoneNumber);
  // console.log(firstName, "fn")
  // console.log(gender, "gender");
  // console.log(age, "age");
  // console.log(goals, "goal");
  // console.log(callDate, "call date");

  console.log(freeInfo, "free info")

  function handleChecks(e) {
    
    if (e.target.checked) {
      setGoals([...goals, e.target.value]);
    } else {
      setGoals(goals.filter((filt) => filt !== e.target.value));
      // console.log(goals.filter((go) => go !== e.target.value));
      // 
    }
  }

  return (
    <>
      {/* <div className="ProfloginHouseContainerP">
        <FontAwesomeIcon icon="coffee" />
        <FontAwesomeIcon icon={["fab", "apple"]} />
        <FontAwesomeIcon icon={["fas", "arrow-circle-right"]} />
        holi
      </div>
      <form>
        <input type="text" />
        <Button variant="primary">Primary</Button> <br />
        <Button variant="outline-success">Success</Button>{" "}
      </form> */}

      <Container fluid className="bgimage bg-dark position-sticky">
        <Container className="bg-white pt-5 min-vh-100 ct2 border border-bottom-0 border-top-0 ">
          <Row className="justify-content-md-center ">
            <h1 className="mb-5">Personal Trainer Request</h1>
            <Col lg="9">
              <Form>
                <h4 className="mb-3">Contact Information</h4>
                <Form.Row>
                  {["First Name", "Last Name", "Email", "Phone"].map(
                    (tx, i) => (
                      <Form.Group as={Col} md="6" key={tx + i}>
                        <Form.Label >{tx}</Form.Label>
                        <Form.Control
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
                      </Form.Group>
                    )
                  )}
                </Form.Row>

                <hr />
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
                  {/* <Form.Group as={Col} md="3">
                    <p className="sm-mt-0 mt-1">Range Selected: {age}</p>
                  </Form.Group> */}
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
                        onChange={(e) => console.log(e.target.checked)}
                        onChange={handleChecks}
                      />
                    ))}
                  </Form.Group>
                </Form.Row>
                <hr />
                <Form.Row>
                  <Form.Group as={Col} md="12">
                  <h4 className="mb-3">
                      When would you like us to contact you?
                   </h4>
                    <Form.Control
                      type="date"
                      name="firstName"
                      value={callDate}
                      onChange={(e) => setCallDate(e.target.value)}
                      className="border border-dark"
                    />
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
                          // onKeyDown={e=>setKeyD(e.key)}
                          onChange={e=>setFreeInfo(e.target.value)}
                          className="border border-dark"
                      />
                  </Form.Group>
                </Form.Row>

                
              </Form>
            
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
