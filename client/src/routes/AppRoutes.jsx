import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"

import { PageWrapper, MainLayout, Loading} from "../components"
import { HomePage, MediaRouter  } from "../features"



export const AppRouter = () => {

    return(
        <>
        <Suspense fallback={<Loading/>}>
            <Routes>
                <Route
                    path="/"
                    element={<MainLayout/>}
                >
                    <>
                        <Route
                            index
                            path="/"
                            element={<PageWrapper>
                                        <HomePage/>
                                    </PageWrapper>
                            }
                        />
                        <Route
                            path="/media/*"
                            element={<PageWrapper>
                                        <MediaRouter/>
                                    </PageWrapper>
                            }
                        />
                            
                    </>
                   
                </Route>
            </Routes>
        </Suspense>
        </>
    )
}