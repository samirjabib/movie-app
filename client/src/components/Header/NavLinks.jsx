import { NavLink } from "react-router-dom";



export const NavLinks = ({ navLinks }) => {

    return(
        <>
           {
            navLinks?.map( (navLink, index) => {
                return(
                    <li key={index} className={`font-medium uppercase text-sm dark:text-white`}>
                        <NavLink 
                            to={navLink.path}
                            className={
                                ({isActive}) =>(isActive) ? 'bg-green-500 shadow px-4 py-2 rounded-md' : 'transiton-all duration-200 delay-100 hover:bg-gray-200 hover:dark:text-black px-4 py-2 rounded-md '
                            }
                        >  
                                {navLink.display}
                        </NavLink>
                    </li>
                )
            })
           }
        </>
    )
};

