
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontaxt } from "./Provider";


const PrivetRouter = ({children}) => {

const location = useLocation();

const { user, loading}=useContext(Authcontaxt);

if(loading){
    return <span className="loading loading-spinner text-info"></span>
}


    if(user){
        return children;
    }
    return <Navigate state={location.pathname}  to={"/login"} ></Navigate>;
};

export default PrivetRouter;