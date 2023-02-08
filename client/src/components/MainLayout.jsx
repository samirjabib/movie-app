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
            <div>
                <Header auth={auth}/>
                <div
                    className="h-screen overflow-hidden"
                >
                    <Outlet/>
                </div>
                <Footer/>
            </div>
        </>
    );
};

