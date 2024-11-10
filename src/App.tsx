// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ModelViewer from "./pages/ModelViewer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/model" element={<ModelViewer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
