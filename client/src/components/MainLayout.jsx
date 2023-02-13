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
                    className="h-screen bg-white dark:bg-black"
                >
                    <Header auth={auth}/>
                    <Outlet/>
                    <Footer/>

                </div>
        </>
    );
};

