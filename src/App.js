import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Feed  from "./pages/feed";
import Register from "./pages/register";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
