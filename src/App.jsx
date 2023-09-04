import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
   return (
      <Router>
         <Navbar />

         <div className="pt-16 container mx-auto">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/add" element={<AddUser />} />
               <Route path="/edit/:id" element={<EditUser />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
