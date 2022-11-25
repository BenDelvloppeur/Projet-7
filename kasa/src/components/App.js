import Home from "../Pages/Home";

import About from "../Pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer";
import Error from "../Pages/Error";
import Logements from "../Pages/Logements";

const App = () => {
  return (
    // Router
    <BrowserRouter>
      {/* Layout */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="logements/:logementId" element={<Logements />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
