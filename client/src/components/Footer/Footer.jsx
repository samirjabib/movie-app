import { useNavLinks } from "../../hooks";
import { NavLinks } from "../Header/NavLinks";

export const Footer = ({auth}) => {

    const navLinks = useNavLinks(auth)

    return (
        <div className="w-full h-32 bg-white dark:bg-[#131313] flex items-center p-4 justify-between mt-36 flex-col-reverse md:flex-row">
          
            <h2 className="font-bold text-2xl self-center  dark:text-white ">Oni<span className="text-green-500">Giri</span></h2>
            <ul className="flex gap-4 self-center mt-4 md:mt-0">
                <NavLinks navLinks={navLinks}/>
            </ul>
        </div>
    );
};

