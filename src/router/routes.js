import MovieList from "pages/MovieList";
import MovieDetail from "pages/MovieDetail";
import NotFound from "pages/NotFound";

export const routes = [
    {
        path: "/",
        element: <MovieList />
        
    },
    {
        path: "movieDetail/:id",
        element: <MovieDetail />
    },
    {
        path: "*",
        element: <NotFound />
    }
]