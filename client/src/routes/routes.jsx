import { HomePage } from "../features";



export const routesGenerator = {
    home:"/",

    mediaList:( type ) => `/${type}`,
    mediaDetail : (type, id) => `${type, id}`,

    mediaSearch:"/search",
    person:(id) => `/person/${id}`,

    favoriteList:"/favorites",
    reviewList:"/reviews",
    passwordUpdate:"password-update"
}


export const routes = [
    {
        index: true,
        element: < HomePage />,
        state: "home"
      },
]