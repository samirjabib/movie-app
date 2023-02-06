import { NavLink } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg"

export const Header = () => {
    return (
        <nav className="bg-gray-200 flex justify-between p-4">
            <div className="flex gap-6">
                <h1>Oni<span>Giri</span></h1>
                    <ul >
                        <li className="flex gap-4">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/'>Movies</NavLink>
                            <NavLink to='/'>Tv Series</NavLink>
                            <NavLink to='/'>Search</NavLink>

                        </li>
                    </ul>
                    <button>
                        <CgDarkMode/>
                    </button>
            </div>
            <button>Sign In</button>

        </nav>
    );
};

