import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";

// More routes get added here as we build each phase:
// /login, /signup, /perfil/:username, /puzzles, /partidas, /partidas/:id

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}
