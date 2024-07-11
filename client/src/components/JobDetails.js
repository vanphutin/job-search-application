import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();

  const [job, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8081/api/v1/jobs/detail/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setJobs(data.job);
      });
  }, []);

  console.log("job >>", job);
  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          {job && job.length > 0
            ? job.map((items, index) => (
                <Card key={index}>
                  <Card.Header>
                    <span>Position:</span>
                    <h3>{items.title}</h3>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      {" "}
                      <strong>Company : </strong> {items.company}
                    </Card.Title>
                    <Card.Text>
                      <strong>Location:</strong> {items.location}
                    </Card.Text>
                    <Card.Text>
                      <strong>Salary: $ </strong> {items.salary}
                    </Card.Text>
                    <Card.Text>{items.description}</Card.Text>
                    <Button variant="primary">Apply Now</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    Posted by {items.idUser}
                  </Card.Footer>
                </Card>
              ))
            : "No Data"}
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetails;
