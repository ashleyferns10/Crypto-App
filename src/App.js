import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";
import Exchange from "./components/Exchange";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coins" element={<Coins />}/>
        <Route path="/exchanges" element={<Exchange />}/>
        <Route path="/coin/:id" element={<CoinDetails />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
