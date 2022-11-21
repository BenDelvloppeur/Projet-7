import Home from "./pages/Home";

import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import Error from "./error/Error";
import Logements from "./pages/Logements";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/logement/c67ab8a7" element={<Logements />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
