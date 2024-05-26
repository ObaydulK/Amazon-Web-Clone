import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Service from "../Pages/Customer Service/Service" 

 const Router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/service',
                element: <Service/>
            }
        ]
    }
 ])
 
 export default Router;