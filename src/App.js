import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/signin_signup/Signin";
import Signup from "./components/signin_signup/Signup";
import HomeScreen from "./components/Screen/HomeScreen";
import ProductDetails from "./components/Screen/ProductDetails";
import AdminPanel from "./components/admin/AdminPanel";
import Store from "./components/Screen/Store";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="store" element={<Store />} />
          <Route path="sign_in" element={<Signin />} />
          <Route path="sign_up" element={<Signup />} />
          <Route path="/product/:gamename" element={<ProductDetails />} />
          <Route path="admin" element={<AdminPanel />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
