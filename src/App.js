import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Product from "./Componentes/PRODUCT/Product.js";
import Banner from "./Componentes/Banner/Banner.js";
import ProductDetails from "./Componentes/PRODUCT/ProductDetails.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ProductDetails />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
