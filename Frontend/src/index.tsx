import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import Layout from "./components/LayoutArea/Layout/Layout"
import LoginPage from "./components/AuthArea/Login/Login"
import Header from "./components/LayoutArea/Header/Header"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
    <Header/>
 <Routes>
    <Route path="/" element={<Layout />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
        </BrowserRouter>
)