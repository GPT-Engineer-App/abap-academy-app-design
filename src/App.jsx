import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome.jsx";
import Profile from "./pages/Profile.jsx";
import Home from "./pages/Home.jsx";
import Chatbot from "./pages/Chatbot.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
