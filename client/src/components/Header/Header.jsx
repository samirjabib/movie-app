import { NavLink } from "react-router-dom";
import { MdOutlineDarkMode} from "react-icons/md"
import { useNavLinks } from "../../hooks/";
import { NavLinks } from "./NavLinks";


export const Header = ({auth}) => {

    const navLinks = useNavLinks(auth)

    return (
        <nav className="bg-gray-200 flex justify-between p-4">
            <div className="flex gap-8">
                <h1>Oni<span>Giri</span></h1>
                    <ul className="flex gap-4">
                        <NavLinks navLinks={navLinks}/>
                    </ul>
                    <button>
                        <MdOutlineDarkMode/>
                    </button>
            </div>
            <button>Sign In</button>

        </nav>
    );
};

