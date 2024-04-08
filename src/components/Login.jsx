import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Authcontaxt } from "./Provider";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const { signInWithgoogle } = useContext(Authcontaxt);
  const navigate = useNavigate()

  // sigin in with google
  const handelGoogleSignWith = () => {
    signInWithgoogle()
      .then((res) => {
        console.log(res);
        navigate("/")
      })
      .catch((error) => {
        console.erro(error);
      });
  };

  return (
    <div id="login-page">
      <div id="login-card">
        <h1> welcome to live Chart</h1>
        <div className="hr">
          <div onClick={handelGoogleSignWith} className=" login-button google">
            <FaGoogle />
          </div>
          <div className="login-button facebook">
            <FaFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
