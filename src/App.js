import "./App.css";
import Layout from "./components/shared/Layout";
import { Route, Routes } from "react-router-dom";
import AllProjects from "./features/AllProjects";
import AddProject from "./features/AddProject";

function App() {
  return (
    <>
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<AllProjects />}></Route>
            <Route path="/add" element={<AddProject />}></Route>
          </Routes>
        </Layout>
      </div>
    </>
  );
}
export default App;
