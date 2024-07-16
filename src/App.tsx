import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Companies from "./pages/Companies";
import Preview from "./pages/Preview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Companies />} />
          <Route path="/company/:id" element={<Preview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
