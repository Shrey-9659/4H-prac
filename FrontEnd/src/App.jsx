import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from "./Components/Success";

function App() {
  return (
    <Router>
      <h1>Hello World</h1>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/success" element={<Success />}/>
        <Route path="/" element={<h1>Welcome to the home page</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
