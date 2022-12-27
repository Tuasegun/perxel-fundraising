import Home from "./Pages/Home";
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import ContactUs from "./Pages/ContactUs";
import AOS from "aos";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return(
    <div>
   <Router>
   <Routes>
      <Route index path="/" element={<Home/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
    </Routes>
    </Router>
    </div>
  )
}

export default App;
