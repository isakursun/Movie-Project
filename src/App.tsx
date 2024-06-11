import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/HomePage";
import Favorites from "./pages/FavoritesPage";
import Detail from "./pages/DetailPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <div className="min-h-screen bg-white text-black p-5 lg:p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
      
      <Footer />
    </BrowserRouter>
  );
};

export default App;
