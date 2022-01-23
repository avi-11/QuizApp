import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from "./components/Questions";
import Result from "./components/Result";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Questions" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
