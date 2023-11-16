// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import Tv from "./pages/Tv";

export default function Router() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/person" element={<Celebrity />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
