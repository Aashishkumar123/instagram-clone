import { 
  BrowserRouter, 
  Routes, 
  Route }
  from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Saved } from "./pages/Saved";

import "./static/css/bootstrap.css";
import "./static/css/style.css";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aashishkumar12376/" element={<Profile />} />
          <Route path="/aashishkumar12376/saved" element={<Saved />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
