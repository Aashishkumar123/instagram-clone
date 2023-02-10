import { 
  BrowserRouter, 
  Routes, 
  Route }
  from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/profile/Profile";
import { Saved } from "./pages/profile/Saved";
import { Tagged } from "./pages/profile/Tagged";

import "./static/css/bootstrap.css";
import "./static/css/style.css";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aashishkumar12376/" element={<Profile />} />
          <Route path="/aashishkumar12376/saved" element={<Saved />} />
          <Route path="/aashishkumar12376/tagged" element={<Tagged />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
