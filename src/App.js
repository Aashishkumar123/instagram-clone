import { 
  BrowserRouter, 
  Routes, 
  Route }
  from "react-router-dom";
import { Home } from "./pages/Home";

import "./static/css/bootstrap.css";
import "./static/css/style.css";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
