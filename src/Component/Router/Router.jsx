import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Service from "../Pages/Customer Service/Service" 
import Registry from "../Pages/Registry/Registry"
import Gift from "../Pages/Gift Cards/Gift"
import Sell from "../Pages/Sell/Sell"




 const Router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/service',
                element: <Service/>
            },
            {
                path:'/registry',
                element:<Registry/>
            },
            {
                path: '/gift',
                element: <Gift/>
            },
            {
                path: '/sell',
                element: <Sell/>
            }

        ]
    }
 ])
 
 export default Router;