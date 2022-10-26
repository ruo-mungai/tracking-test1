import "./App.css";
import Layout from "./components/shared/Layout";
import { Route, Routes } from "react-router-dom";
import AllProjects from "./projects/AllProjects";
import AddProject from "./projects/AddProject";
import EditProject from "./projects/EditProject";

function App() {
  return (
    <>
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<AllProjects />}></Route>
            <Route path="/add" element={<AddProject />}></Route>
            <Route path="/edit/:id" element={<EditProject />}></Route>
          </Routes>
        </Layout>
      </div>
    </>
  );
}
export default App;
