import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
import { useTrainerrequest } from "../hooks";

export default (props) => {
  const { requests } = useTrainerrequest();
  return (
    <>
      <Container fluid className="bgimage bg-dark ">
        <Container className="bg-white pt-2 min-vh-100 ct2 border border-bottom-0 border-top-0 ">
          <h1 className="pb-5 text-center text-purple">Info Request List</h1>
          <hr className="line-purple" />

          {requests !== undefined
            ? requests.map((r,i) => (
                <div key={"info"+i}>
                  <Row className="mx-5 ">
                    <Col sm="6" className="mx-auto">
                      <p>
                       <span className="text-purple"> Name:</span> {r.firstName} {r.lastName}{" "}
                      </p>
                      <p> <span className="text-purple">Email:</span> {r.email} </p>
                      <p> <span className="text-purple">Phone: </span>{r.phoneNumber} </p>
                      <p>
                      <span className="text-purple"> Gender: </span>{r.gender !== "" ? r.gender : "Not provided"}{" "}
                      </p>
                      <p> <span className="text-purple">Age:</span> {r.age !== "" ?r.age:"Not provided"} </p>
                    </Col>
                    <Col sm="6" className="mx-auto">
                      <p>
                      <span className="text-purple"> Date: </span>{moment(r.callDate).utc().format("DD/MM/YYYY")}
                      </p>
                      <p>
                      <span className="text-purple"> Goals:</span>{" "}
                        {r.goals.length!==0?r.goals.map((g, i, arr) =>
                          i !== arr.length - 1 ? g + ", " : g + "."
                        ): 
                        "Not Provided"}{" "}
                      </p>
                      <p><span className="text-purple">More info: </span>{r.freeInfo!==""?r.freeInfo:"Not Provided"} </p>
                    </Col>
                  </Row>
                  <hr className="line-purple" />
                </div>
              ))
            : ""}
          
        </Container>
      </Container>
    </>
  );
};
