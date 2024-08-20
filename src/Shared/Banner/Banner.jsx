import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner1 from "../../assets/image/banner1.jpg"

const Banner = () => {
    return (
        <div>
            <div className="relative w-full h-[500px] ">
                <img src={banner1} className="w-full h-[500px]" />
                <div className="absolute items-center w-full h-[500px] left-0 top-0 bg-gradient-to-r from-[#151515]/70 to-[#151515]/0">
                    <div className="text-white pl-12 text-left mt-24">
                        <h2 className="lg:text-6xl text-4xl font-bold md:w-[600px] mb-2">Explore our top-rated products and elevate your style.</h2>
                        <button className="btn btn-outline text-white mt-4">Explore More<FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;