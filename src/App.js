import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Produtos from "./Components/Produtos";
import "./App.css";
import Contato from "./Components/Contato";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
