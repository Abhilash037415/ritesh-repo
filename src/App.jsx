import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignInForm from "./pages/Signin";
import Signup from "./pages/signup";
import Features from "./pages/Features";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/features" element={<Features />} /> 
      </Routes>
    </Router>
  );
}
