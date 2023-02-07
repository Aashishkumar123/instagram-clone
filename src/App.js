import { 
  BrowserRouter, 
  Routes, 
  Route }
  from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

import "./static/css/bootstrap.css";
import "./static/css/style.css";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aashishkumar12376/" element={<Profile />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
