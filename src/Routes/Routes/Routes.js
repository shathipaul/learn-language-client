import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import PrivateRoute from "../../Pages/PrivateRoute/PrivateRoute";
import Register from "../../Pages/Register/Register";
import SingleCourse from "../../Pages/SingleCourse/SingleCourse";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses/'),
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: 'course/:id',
                element: <PrivateRoute><SingleCourse></SingleCourse></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
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