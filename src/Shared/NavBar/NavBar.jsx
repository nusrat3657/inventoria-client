import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged Out Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch()
    }

    return (
        <div>
            <div className="navbar z-10 bg-opacity-50  bg-orange-200 text-white mb-5">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-2xl font-bold font-lilita"><span className=" text-orange-500">Inventoria</span></a>
                </div>
                {/* <a className="btn btn-ghost font-bold text-xl"><span className=" text-orange-500">Inventoria</span></a> */}
                <div className="navbar-end gap-4">
                    {
                        user ?
                            <>
                                <button onClick={handleSignOut} className="btn  bg-amber-500 text-white text-lg px-8 rounded-none">Log Out</button>

                                {/* <div className="dropdown dropdown-end relative z-30 tooltip" data-tip={user?.displayName || "User Name not found"}> */}
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar  dropdown dropdown-hover dropdown-end">
                                    <div className=" rounded-full" >
                                        <img alt="" src={user?.photoURL
                                            || "https://i.ibb.co/Y0RBQqQ/download.png"} />
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <li className="text-black"><a>{user?.displayName || "User Name not found"}</a></li>
                                    </ul>
                                </div>
                                {/* </div> */}
                            </>
                            :
                            <>
                                <Link to='/login'>
                                    <button className="btn rounded-none bg-amber-500 text-white text-lg px-8">Login</button>
                                </Link>
                                <Link to='/register'>
                                    {/* <button className="btn rounded-none bg-amber-500 text-white text-lg px-8 ">Register</button> */}
                                </Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;