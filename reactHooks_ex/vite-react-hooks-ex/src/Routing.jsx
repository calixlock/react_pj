import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Ex_useEffect from "./pages/Ex_useEffect.jsx";
import Ex_useEffect_cleanUp from "./pages/Ex_useEffect_cleanUp";
import Ex_useState from "./pages/Ex_useState.jsx";
function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/useState" element={<Ex_useState />} />
        <Route path="/useEffect" element={<Ex_useEffect />} />
        <Route path="/useEffectCleanUp" element={<Ex_useEffect_cleanUp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routing;
