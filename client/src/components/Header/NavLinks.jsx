import { NavLink } from "react-router-dom";



export const NavLinks = ({ navLinks }) => {


    return(
        <>
           {
            navLinks?.map( (navLink, index) => {
                return(
                    <li key={index} className='flex flex-row'>
                        <NavLink to={navLink.path}>{navLink.display}</NavLink>
                    </li>
                )
            })
           }
        </>
    )
};

