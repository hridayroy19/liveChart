// /* eslint-disable react/prop-types */

import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./firebase";


export const Authcontaxt = createContext(null);

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);


  // google login

  const signInWithgoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubcripe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubcripe();
    };
  }, []);


  const authInfo = {
    user,
    logOut,
    signInWithgoogle,
    loading
  };
  return (
    <Authcontaxt.Provider value={authInfo}>{children}</Authcontaxt.Provider>
  );
};

export default Provider;
