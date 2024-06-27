import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import About from "./subpage/Aboutus";
import Pricing from "./subpage/Pricing";
import Search from "./components/Search";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" exact element={<SignIn />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/price" exact element={<Pricing />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/contact" exact element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
