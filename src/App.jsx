import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import SpecialCase from "./components/specialcase/SpecialCase";
import ScrollToTop from "./components/specialcase/ScrollToTop";
import Contact from "./pages/Contact";

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <SpecialCase />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
