import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import MiddlePage from "./pages/MiddlePage";
import MyDetails from "./pages/MyDetails";
import AllUsers from "./pages/AllUsers";
import "./styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/middle" element={<MiddlePage />} />
        <Route path="/mydetails" element={<MyDetails />} />
        <Route path="/allusers" element={<AllUsers />} />
      </Routes>
    </Router>
  );
}

export default App;
