import { createBrowserRouter } from "react-router-dom";
import AddService from '../components/AddService';
import Blog from '../components/Blog';
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import Myreviews from '../components/Myreviews';
import Register from "../components/Register";
import Services from "../components/Services";
import SingleService from "../components/SingleService";
import Main from "../layout/Main";







const router=createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/add-services',
                element:<AddService></AddService>
            },
            {
                path:'/my-reviews',
                element:<Myreviews></Myreviews>
            },
            {
                path:'/service/:id',
                element:<SingleService></SingleService>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]

    }

]);


export default router;