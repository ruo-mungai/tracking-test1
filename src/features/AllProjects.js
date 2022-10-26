import { fetchALLProjects, getAllProjects, getLoading } from "./projectslice";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";

const AllProjects = () => {
  const allProjects = useSelector(getAllProjects);
  const apiStatus = useSelector(getLoading);
  const dispatch = useDispatch();
  let contentToRender = "";

  useEffect(() => {
    dispatch(fetchALLProjects());
  }, [dispatch]);
  contentToRender =
    apiStatus === "pending" ? (
      <>
        <div className=" d-flex align-items-center justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </>
    ) : (
      <>
        <Row xs={1} md={3} className="g-1">
          {allProjects.map((project) => (
            <Col key={project.id}>
              <Card>
                {/* <Card.Img variant="top" src={project.name} /> */}
                <Card.Body>
                  <Card.Title>{project.name}</Card.Title>
                  {/* <Card.Text>Model Year - {project.year}</Card.Text> */}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );

  return <Container className="mt-2">{contentToRender}</Container>;
};

export default AllProjects;
