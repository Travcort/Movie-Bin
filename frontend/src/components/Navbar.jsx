import { IoSearch, IoHome } from "react-icons/io5";
import ColourMode from "./ColourMode";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex px-7 max-w-full place-content-center m-auto bg-white dark:bg-black shadow-lg">
            <div className="flex">
                <div className="flex-1 group">
                    <a href="/" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-[rgb(var(--text-colour))] dark:text-[rgb(var(--text-colour))] group-hover:text-[rgb(var(--hover-colour))]">
                        <span className="flex flex-col items-center block px-1 pt-1 pb-1">
                            <IoHome className="text-2xl pt-1 mb-1 block" />
                            <span className="block text-xs pb-2">Home</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-[rgb(var(--hover-colour))] rounded-full"></span>
                        </span>
                    </a>
                </div>
                
                <div className="flex-1 group">
                    <Link to={"/search"} className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-[rgb(var(--text-colour))] dark:text-[rgb(var(--text-colour))] group-hover:text-[rgb(var(--hover-colour))]">
                        <span className="flex flex-col items-center block px-1 pt-1 pb-1">
                            <IoSearch className="text-2xl pt-1 mb-1 block" />
                            <span className="block text-xs pb-2">Search</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-[rgb(var(--hover-colour))] rounded-full"></span>
                        </span>
                    </Link>
                </div>
                
                <ColourMode />
            </div>
        </div>
    );
}

export default Navbar;