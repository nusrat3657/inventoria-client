import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [sortOption, setSortOption] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setTotalPages(data.totalPages);
            });
    }, [currentPage]);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const filterSortAndSearchProducts = (products) => {
        // Filter products
        let filteredProducts = products.filter(product => {
            const matchesBrand = brandFilter ? product.brand === brandFilter : true;
            const matchesCategory = categoryFilter ? product.category === categoryFilter : true;
            const matchesPrice = priceRange ? (
                priceRange === 'low' ? product.price < 50 :
                    priceRange === 'mid' ? product.price >= 50 && product.price <= 100 :
                        priceRange === 'high' ? product.price > 100 : true
            ) : true;
            const matchesSearch = searchQuery ? product.productName.toLowerCase().includes(searchQuery.toLowerCase()) : true;

            return matchesBrand && matchesCategory && matchesPrice && matchesSearch;
        });

        // Sort products
        if (sortOption === 'priceLowToHigh') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'priceHighToLow') {
            filteredProducts.sort((a, b) => b.price - a.price);
        } else if (sortOption === 'newestFirst') {
            filteredProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }

        return filteredProducts;
    };

    const finalProducts = filterSortAndSearchProducts(products);


    return (
        <div>
            <div>
                <h3 className="text-2xl text-orange-600">Our Products</h3>
                <h2 className="text-2xl text-orange-600">Our Products Area</h2>
                <p></p>
            </div>
            {/* Search Bar */}
            <div className="mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products by name"
                    className="p-2 border rounded w-full"
                />
            </div>
            {/* Filter Options */}
            <div className="mb-4 flex space-x-4">
                {/* Brand Filter */}
                <select
                    value={brandFilter}
                    onChange={(e) => setBrandFilter(e.target.value)}
                    className="p-2 border rounded"
                >
                    <option value="">All Brands</option>
                    <option value="Dell">Dell</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="Aarong">Aarong</option>
                    <option value="Walton">Walton</option>
                    <option value="Hatil">Hatil</option>
                    <option value="Puma">Puma</option>
                    <option value="Nike">Nike</option>
                </select>

                {/* Category Filter */}
                <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="p-2 border rounded"
                >
                    <option value="">All Categories</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Footwear">Footwear</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Fitness">Fitness</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Home Appliances">Home Appliances</option>
                    {/* Add more category options as needed */}
                </select>

                {/* Price Range Filter */}
                <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="p-2 border rounded"
                >
                    <option value="">All Prices</option>
                    <option value="low">Low ($0 - $50)</option>
                    <option value="mid">Mid ($50 - $100)</option>
                    <option value="high">High ($100+)</option>
                </select>
            </div>

            {/* Sort Options */}
            <div className="mb-4">
                <label className="mr-2">Sort By:</label>
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="p-2 border rounded"
                >
                    <option value="">Select</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                    <option value="newestFirst">Date Added: Newest First</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    finalProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
            {/* Pagination Controls */}
            <div className="pagination mt-4 text-center">
                <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className="btn border-black mr-2"
                >
                    <FaArrowLeft />Previous
                </button>
                <span>{` Page ${currentPage} of ${totalPages} `}</span>
                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="btn border-black  ml-2"
                >
                    Next<FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Products;