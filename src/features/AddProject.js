import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getLoading, saveNewProject } from "./projectslice";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      category: "",
      description: "",
    },
  });

  const disptach = useDispatch();
  const navigate = useNavigate();
  const apiStatus = useSelector(getLoading);

  const createNewProject = (data) => {
    let payload = {
      name: data.name,
      category: data.category,
      description: data.description,
    };
    disptach(saveNewProject(payload))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };
  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Create A New Project</legend>
            <Form onSubmit={handleSubmit(createNewProject)}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <Form.Control type="text" {...field} />
                  )}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formcategory">
                <Form.Label>Category</Form.Label>
                <Controller
                  control={control}
                  name="category"
                  render={({ field }) => (
                    <Form.Control type="text" {...field} />
                  )}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>description</Form.Label>
                <Controller
                  control={control}
                  name="description"
                  render={({ field }) => (
                    <Form.Control type="text" {...field} />
                  )}
                />
              </Form.Group>
              <Button
                variant="dark"
                type="submit"
                disabled={apiStatus === "pending"}
              >
                {apiStatus === "pending" ? "Saving........." : "Save"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddProject;
