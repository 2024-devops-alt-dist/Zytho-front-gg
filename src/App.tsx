import {} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ListBeers from "./pages/beer/ListBeers";
import { PrimeReactProvider } from "primereact/api";
import DetailBeer from "./pages/beer/DetailBeer";
import "primereact/resources/themes/saga-blue/theme.css"; // Remplacez par votre thème
import "primereact/resources/primereact.min.css";

function App() {
  return (
    <PrimeReactProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<ListBeers />} />
          <Route path="/beers/:id" element={<DetailBeer />} />
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;
