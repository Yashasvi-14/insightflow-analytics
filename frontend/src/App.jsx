import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import SessionDetails from "./pages/SessionDetails";
import HeatmapPage from "./pages/HeatmapPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route
          path="/session/:sessionId"
          element={<SessionDetails />}
        />

        <Route
          path="/heatmap"
          element={<HeatmapPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;