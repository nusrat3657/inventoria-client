/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { FaArrowLeft, FaArrowRight, FaSearch } from "react-icons/fa";

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

    // Function to fetch products with query parameters
    const fetchProducts = () => {
        const queryParams = new URLSearchParams({
            page: currentPage,
            limit: itemsPerPage,
            sortOption,
            brand: brandFilter,
            category: categoryFilter,
            priceRange,
            searchQuery,
        });

        fetch(`https://job-task-server-murex.vercel.app/products?${queryParams}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setTotalPages(data.totalPages);
            });
    };

    // Update products whenever any filter, sort, search, or pagination option changes
    useEffect(() => {
        fetchProducts();
    }, [currentPage, sortOption, brandFilter, categoryFilter, priceRange, searchQuery]);

    // Pagination controls
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

    return (
        <div>
            <div className="my-5">
                <h2 className="text-center text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl mb-4">Our Products</h2>
                <p className="mx-auto w-[57%] text-center mb-5">Discover the perfect blend of style and functionality with our latest collection. From sleek electronics to trendy fashion, find everything you need in one place. Shop now and elevate your lifestyle with our top-rated products, all available at unbeatable prices.</p>
            </div>
            <div className="lg:flex justify-between">
                {/* Search Bar */}
                <div className="mb-4 relative">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1); // Reset to first page on search change
                        }}
                        placeholder="Search products by name"
                        className="input input-bordered p-2 md:pr-10 rounded w-full"
                    />
                    <span className="absolute top-4 text-gray-400 -ml-7 "><FaSearch></FaSearch></span>
                </div>
                {/* Filter Options */}
                <div className="mb-4 md:flex  space-x-4">
                    {/* Brand Filter */}
                    <select
                        value={brandFilter}
                        onChange={(e) => {
                            setBrandFilter(e.target.value);
                            setCurrentPage(1); // Reset to first page on filter change
                        }}
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
                        onChange={(e) => {
                            setCategoryFilter(e.target.value);
                            setCurrentPage(1); // Reset to first page on filter change
                        }}
                        className="p-2 border rounded"
                    >
                        <option value="">All Categories</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Footwear">Footwear</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Home Appliances">Home Appliances</option>
                    </select>

                    {/* Price Range Filter */}
                    <select
                        value={priceRange}
                        onChange={(e) => {
                            setPriceRange(e.target.value);
                            setCurrentPage(1); // Reset to first page on filter change
                        }}
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
                        onChange={(e) => {
                            setSortOption(e.target.value);
                            setCurrentPage(1); // Reset to first page on sort change
                        }}
                        className="p-2 border rounded"
                    >
                        <option value="">Select</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                        <option value="newestFirst">Date Added: Newest First</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
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
