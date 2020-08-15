import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTrainerrequest} from '../hooks'



export default (props) => {
  const { requests } = useTrainerrequest()
 
  const lastone= requests[0]!==undefined && requests[requests.length -1].firstName
 
  return (
    <>
      <Container fluid className="bgimage bg-dark position-sticky">
        <Container className="bg-white pt-2 min-vh-100 ct2 border border-bottom-0 border-top-0 my-auto ">
          <Row className="justify-content-md-center ">
            <Col lg="9">
             <h1 className="pb-2">Thank you {lastone} </h1>
             <p className="pb-2">Your request has been sent.</p>
              
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};
