/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const { productName, productImage, description, price, category, ratings } = product;
    return (
        <div className="lg:hover:scale-105 animate__animated animate__zoomIn  bg-base-100 shadow-xl">
            <figure>
                <img
                    src={productImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-orange-500">{productName}</h2>
                <p>{description}</p>
                <p className="font-bold">Price: <span className="text-red-600">${price}</span></p>
                    <p className="font-bold my-2">Ratings: <span className="p-2 rounded-2xl border-black text-center bg-orange-100">{ratings}</span></p>
                    <p className="font-bold">Category: <span className="p-2 rounded-2xl border-black text-center bg-orange-100">{category}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn bg-orange-400 border-none text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;