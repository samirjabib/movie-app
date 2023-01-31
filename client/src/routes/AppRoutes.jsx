import { Routes, Route } from "react-router-dom"

import { PageWrapper, MainLayout} from "../components"

import { routes } from "./routes"


export const AppRouter = () => {



    return(
        <>
            <Routes>
                <Route 
                    path="/"
                    element={<MainLayout/>}
                >
                    {
                        routes.map( (route, index) => (
                            route.index 
                                ? (
                                    <Route
                                        index
                                        key={index}
                                        element={route.state ? 
                                            (
                                            <PageWrapper>
                                                {route.element}
                                            </PageWrapper>
                                            ) : route.element
                                        }
                                    />
                                ) : (
                                    <Route
                                        key={index}
                                        element={route.state ? 
                                            (
                                            <PageWrapper>
                                                {route.element}
                                            </PageWrapper>
                                            ) : route.element
                                        }
                                        />
                                    )
                            )
                        )
                    }
                </Route>
            </Routes>
        </>
    )
}