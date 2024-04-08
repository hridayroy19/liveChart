import { createBrowserRouter } from "react-router-dom";
import Mainlaout from "./Mainlaout";
import Home from "./Home";
import Login from "./Login";
import PrivetRouter from "./PrivetRote";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlaout></Mainlaout>,
      children:[{
        path:"/",
        element:<PrivetRouter><Home></Home></PrivetRouter>
      }]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
  ]);
export default Router;