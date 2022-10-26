import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getProjectById,
  getLoading,
  updateProject,
} from "./projectslice";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = () => {
  const { id } = useParams();
  const edit = useSelector(getProjectById(Number(id)));
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: edit.name,
      category: edit.category,
      description: edit.description,
    },
  });

  const disptach = useDispatch();
  const navigate = useNavigate();
  const apiStatus = useSelector(getLoading);

  const updateProjectForm = (data) => {
    let payload = {
      id: Number(id),
      name: data.name,
      category: data.category,
      description: data.description,
      github_link: data.github_link
    };
    disptach(updateProject(payload))
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
            <legend>Update A Project</legend>
            <Form onSubmit={handleSubmit(updateProjectForm)}>
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
              <Form.Group className="mb-3" controlId="formdescription">
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

              <Button
                variant="dark"
                type="submit"
                disabled={apiStatus === "pending"}
              >
                {apiStatus === "pending" ? "Updating........." : "Update"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default EditProject;
