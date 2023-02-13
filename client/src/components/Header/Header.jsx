import { MdOutlineDarkMode} from "react-icons/md"
import { useNavLinks, useProviderTheme } from "../../hooks/";
import { useBackgroundScroll } from "../../hooks/useBackgroundScroll";
import { NavLinks } from "./NavLinks";


export const Header = ({auth}) => {

    const navLinks = useNavLinks(auth)
    const { theme, handleThemeSwitch } = useProviderTheme()
    const { backgroundScroll, backgroundHandle } = useBackgroundScroll()

    return (
        <nav 
            className={`flex z-50 justify-between p-4 fixed top-0 w-full ${backgroundScroll ? 'bg-transparent' : 'bg-white dark:bg-[#131313]'}`}
            onChange={backgroundHandle}
        >
            <div className="flex gap-8">
                <h1 className="font-bold text-2xl self-center  dark:text-white">Oni<span className="text-green-500">Giri</span></h1>
                    <ul className="gap-4 self-center hidden md:flex">
                        <NavLinks navLinks={navLinks}/>
                        <button 
                        className="duration-100 transition-all rounded-full delay-100 hover:bg-green-500 relative bottom-[1px]"
                        onClick={handleThemeSwitch}
                        >
                            <MdOutlineDarkMode 
                                size={24}
                                color={`${ (theme === 'light') ? '#000000' : '#fff'}`}
                            />
                        </button>
                    </ul>
                   
            </div>
            <button 
                className="bg-green-500 text-sm shadow uppercase rounded-md font-medium dark:text-white px-4 py-2"
            >
                Sign In
            </button>
           
        </nav>
    );
};

