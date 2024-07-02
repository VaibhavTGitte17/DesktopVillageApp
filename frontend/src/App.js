import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Add from "./Components/Add";
import Show from "./Components/Show";
import Update from './Components/Update'
import Agriculture from "./Components/Blog/Agri";
import Poultry from "./Components/Blog/Poul";
import Learning from "./Components/Blog/Learning";


function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/blog" element={<Contact />} />
          <Route path="/show" element={<Show />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/agri" element={<Agriculture />} />
          <Route path="/poul" element={<Poultry />} />
          <Route path="/learn" element={<Learning />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
