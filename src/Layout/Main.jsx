import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto md:p-4 p-2 ">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;