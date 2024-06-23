import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import Resume from "./components/resume/resume";
import Contact from "./components/contact/contact";
import Layout from "./layout/layout";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
