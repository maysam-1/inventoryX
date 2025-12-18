import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/LayoutArea/Layout/Layout";
import LoginPage from "./components/AuthArea/Login/Login";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout />}>
        <Route index element={<div />} />
    <Route path="/login" element={<LoginPage />} />

      </Route>


    </Routes>
  </BrowserRouter>
);
