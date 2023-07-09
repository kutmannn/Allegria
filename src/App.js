import {Routes, Route} from "react-router-dom"
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import "./styles/style.scss"
import Register from "./pages/Register/Register";
import Favorites from "./pages/Favorites/Favorites";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import Questions from "./pages/Questions/Questions";
import Brands from "./pages/Brands/Brands";
import Products from "./pages/Products/Products";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={''} element={<Layout/>}>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/products'} element={<Products/>}/>
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'/favorites'} element={<Favorites/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/cart'} element={<Cart/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path={'/questions'} element={<Questions/>}/>
            <Route path={'/brands'} element={<Brands/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
