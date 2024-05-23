import {
  createBrowserRouter,
} from "react-router-dom"
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
          },
          {
            path: '/menu',
            element:<Menu></Menu>
          },
          {
            path: '/order/:category',
            element: <Order></Order>
          },
          {
            path: '/login',
            element:<Login></Login>
          },
          {
            path: '/signup',
            element:<SignUp></SignUp>
          }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [ 
      
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'users',
        element:<AllUsers></AllUsers>
      }

     ]
  }
]);