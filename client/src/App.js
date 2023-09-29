import "./App.css";
import LandingPage from "./components/Landing/Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserCreate from "./components/UserHandle/UserCreate";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/user" element={<UserCreate />} />
        <Route path="/dashbord" element={<Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
