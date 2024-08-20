import { Helmet } from "react-helmet-async";
import Banner from "../../Shared/Banner/Banner";
import NavBar from "../../Shared/NavBar/NavBar";
import Products from "../../Shared/Products/Products";

const Home = () => {
    return (
        <div>
            <Helmet><title>Inventoria | Home</title></Helmet>
            <NavBar></NavBar>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;