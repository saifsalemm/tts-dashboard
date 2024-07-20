import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TutorialsPage from "./pages/TutorialsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
