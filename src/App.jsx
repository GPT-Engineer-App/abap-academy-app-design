import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Profile from "./pages/Profile.jsx";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
