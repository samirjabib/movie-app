import { NavLink } from "react-router-dom";
import { useNavLinks } from "../../hooks";


const footerLinks = [
    {
        display:'Home',
        path:'/'
    },
    {
        display:'Movies',
        path:'/media/movies'
    },
    {
        display:'Series',
        path:'/media/series'
    },
  
]

export const Footer = ({auth}) => {

    const navLinks = useNavLinks(auth)

    return (
        <div className="w-full h-32 dark:bg-[#131313] flex items-center p-4 justify-between flex-col-reverse md:flex-row ">
          
            <h2 className="font-bold text-2xl self-center  dark:text-white ">Oni<span className="text-green-500">Giri</span></h2>
            <ul className="flex gap-4 self-center mt-4 md:mt-0">
                {
                    footerLinks.map( (link, index) => {
                        return(
                            <NavLink
                                key={index}
                                to={link.path}
                                className='cursor-pointer text-black dark:text-white text-xs'
                            >
                                {link.display}
                            </NavLink>
                        )
                    } )
                }
            </ul>
        </div>
    );
};

