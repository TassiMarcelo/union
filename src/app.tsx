import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GestionUsuarios from "./pages/gestion-usuarios/App";
import Requerimientos from "./pages/requerimientos/App";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/gestion-usuarios/*" element={<GestionUsuarios />} />
        <Route path="/requerimientos/*" element={<Requerimientos />} />
      </Routes>
    </Router>
  );
}

export default App;