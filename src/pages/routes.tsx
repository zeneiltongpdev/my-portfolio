import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Skills } from "./Skills";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
