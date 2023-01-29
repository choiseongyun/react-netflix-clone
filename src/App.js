import Nav from "./components/Nav";
import './App.css';

import Footer from "./components/Footer";
import { Outlet, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";


const Layout = () =>{
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
 
function App() {
  return (
    <div className="App">
        <Routes > 
          <Route path="/" element={<Layout />}>
            <Route index element={<Mainpage />} />
            <Route path=":movieId" element={<DetailPage />} />
            <Route path="search" element={<SearchPage />} />
          </Route>

        </Routes>
    </div>
  );
}

export default App;
