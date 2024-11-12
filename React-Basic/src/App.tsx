import AboutPage from "@/pages/About";
import MainPage from "@pages/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage />}></Route>
        <Route index path="/about" element={<AboutPage />}></Route>
        <Route index path="/about/:id" element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
