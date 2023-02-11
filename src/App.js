import { 
  BrowserRouter, 
  Routes, 
  Route }
from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/profile/Profile";
import { Saved } from "./pages/profile/Saved";
import { Tagged } from "./pages/profile/Tagged";
import { Followers } from "./pages/profile/Followers";
import { Following } from "./pages/profile/Following";
import { Editprofile } from "./pages/accounts/Editprofile";

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
          <Route path="/aashishkumar12376/followers" element={<Followers />} />
          <Route path="/aashishkumar12376/following" element={<Following />} />
          <Route path="/accounts/edit" element={<Editprofile />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
