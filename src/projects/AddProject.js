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
      github_link: "",
       user_id:"",
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
      github_link: data.github_link,
      user_id: data.user_id,
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
                    // <Form.Control type="text" {...field} />
                    <Form.Select
                      aria-label="Default select example"
                      type="text"
                      {...field}
                    >
                      <option>select category</option>
                      <option value="Android">Android</option>
                      <option value="Fullstack">Fullstack</option>
                    </Form.Select>
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
              <Form.Group className="mb-3" controlId="formDescription">
                <Form.Label>github_link</Form.Label>
                <Controller
                  control={control}
                  name="github_link"
                  render={({ field }) => (
                    <Form.Control type="text" {...field} />
                  )}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formuser_id">
                <Form.Label>user_id</Form.Label>
                <Controller
                  control={control}
                  name="user_id"
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
