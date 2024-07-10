import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();

  const job = {
    title: "FULL STACK DEVELOPER",
    description: `SoftRoad Vietnam Co., Ltd. is a 100% subsidiary branch of SoftRoad Co., Ltd., headquartered in Tokyo, Japan.
    SoftRoad Co., Ltd. Japan (the parent company) was established in 2001. It is the largest professional AI system upgrade company in Japan. The System Reform technology experiences an average annual growth rate of 30%. The clientele consists of over 30% of the top 200 companies in Japan and worldwide.
    The company is listed on the Topix stock index and is expanding its business operations into the European and American markets.`,
    location: "HO CHI MINH",
    salary: "30000000",
    company: "MGM technology parent",
    userName: "Nguyen Van A",
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <Card>
            <Card.Header>
              <h3>{job.title}</h3>
            </Card.Header>
            <Card.Body>
              <Card.Title>{job.company}</Card.Title>
              <Card.Text>
                <strong>Location:</strong> {job.location}
              </Card.Text>
              <Card.Text>
                <strong>Salary:</strong> {job.salary}
              </Card.Text>
              <Card.Text>{job.description}</Card.Text>
              <Button variant="primary">Apply Now</Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              Posted by {job.userName}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetails;
