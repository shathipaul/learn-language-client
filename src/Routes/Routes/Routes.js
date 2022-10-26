import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/FAQ";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'faq',
                element: <FAQ></FAQ>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])