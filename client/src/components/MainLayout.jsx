import { Header } from "./Header";
import { Footer } from "./Footer";

import { Outlet } from "react-router-dom";


export const MainLayout = () => {
    return (
        <>  
            <div>
                <Header/>
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

