import {} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ListBeers from "./pages/beer/ListBeers";
import { PrimeReactProvider } from "primereact/api";
import DetailBeer from "./pages/beer/DetailBeer";
import ListBreweries from "./pages/brewerie/ListBreweries";
import NavBar from "./components/NavBar";
import DetailBrewerie from "./pages/brewerie/DetailBrewerie";
import Footer from "./components/Footer";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <PrimeReactProvider value={{ unstyled: false }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breweries" element={<ListBreweries />} />
          <Route path="/breweries/:id" element={<DetailBrewerie />} />
          <Route path="/beers" element={<ListBeers />} />
          <Route path="/beers/:id" element={<DetailBeer />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
