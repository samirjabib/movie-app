import { Header } from "./Header";
import { Footer } from "./Footer";

import { Outlet } from "react-router-dom";


export const MainLayout = () => {
    const auth = {
        status:'authenticated',
        role:'client'
    }

    return (
        <>  
                <div
                    className="bg-white dark:bg-black "
                >
                    <Header auth={auth}/>
                        <Outlet/>
                    <Footer auth={auth}/>
                </div>
        </>
    );
};

