import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    })
    return (
        <div>
            <div>
                <h3 className="text-2xl text-orange-600">Our Products</h3>
                <h2 className="text-2xl text-orange-600">Our Products Area</h2>
                <p></p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;