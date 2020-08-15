import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { useAdmins} from '../hooks'


export default (props) => {
  const [email, setEmail] = useState("");
  


  return (
    <>
      <Container fluid className="bgimage bg-dark position-sticky">
        <Container className="bg-white pt-2 min-vh-100 ct2 border border-bottom-0 border-top-0 my-auto ">
          <Row className="justify-content-md-center ">
            <Col lg="9">
             <h1 className="pb-2">Thank you</h1>
             <p className="pb-2">Your request has been sent.</p>
              
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
