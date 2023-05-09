import { Link, Outlet } from "react-router-dom";
import { getProducts } from "./data";

export default function Products() {
    const data = getProducts();
    return (
        <div>
            <h1>Products</h1>
            <nav>
                {data.map((item, index) => (
                    <Link key={index} to={`/products/${item.id}`}>
                        {item.name}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}
