import Studentlist from "./components/Studentlist1";
import "./style.css"
import "./weather.css"
import Api from "./components2/Api";
import Weather from "./components2/Weather";
import TestUseEffect from "./components2/TestuseEffect";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Products from "./pages/Products"
import Prices from "./pages/Prices"
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
export default function App(){
    return (
        <div>
        {/* <Studentlist />
        <Api />
        <Weather /> */}
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/products">Product</Link>
            </li>
            <li>
                <Link to="/prices">Prices</Link>
            </li>
        </ul>
        <TestUseEffect />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}>
                <Route path=":id" element={<Product />}></Route>
            </Route>
            <Route path="/prices" element={<Prices />}></Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
        </div>
    )
}