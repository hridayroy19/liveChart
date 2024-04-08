import { ChatEngine } from "react-chat-engine";
import { Authcontaxt } from "./Provider";
import { useContext } from "react";
const Home = () => {
  const { user, logOut } = useContext(Authcontaxt);

  const handelSignout = () => {
    logOut().then().catch();
  };

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">unichart</div>
        <div className="logout-tab">
          {user ? (
            <>
              <button onClick={handelSignout}>SIGN OUT</button>
            </>
          ) : (
            <Link to={"/login"}>
              <button> LOGIN </button>
            </Link>
          )}
        </div>
      </div>
      <ChatEngine
        height="cale(100vh-66px)"
        ProjectID="e1cbbe03-9408-4052-94a3-b7bf0fe6d4ae"
        userName="."
        userSecuret="."
      />
    </div>
  );
};

export default Home;
