import { Routes, Route } from "react-router-dom";
import {TablaRequerimientos} from "./components/TablaRequerimientos";
import Login from "./components/pages/login/Login";
import "./app.css";
import "./index.css"; 

function RequerimientosApp() {
  return (
    <Routes>
      <Route path="/" element={<TablaRequerimientos />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default RequerimientosApp;
