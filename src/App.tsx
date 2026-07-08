import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Downloads } from "./pages/Downloads";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
function App() {
  return (
    <>
      <SmoothScroll />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/downloads" element={<Downloads></Downloads>} />
          <Route path="/about" element={<About></About>} />

          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
