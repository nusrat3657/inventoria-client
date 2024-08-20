import Banner from "../../Shared/Banner/Banner";
import NavBar from "../../Shared/NavBar/NavBar";
import Products from "../../Shared/Products/Products";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Products></Products>
        </div>
    );
};

export default Home;