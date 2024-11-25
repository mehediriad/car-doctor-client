import { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile,onAuthStateChanged ,signOut  } from "firebase/auth";


export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(false)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUserProfile = (name,imgURL) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imgURL
          })
    }

    const logInUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false)
                setUser(user)
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              // ...
            } else {
                setLoading(false)
                setUser(null)
              // User is signed out
              // ...
            }
          });
          return () =>{
            return  unSubscribe()
          }
    },[])
    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        logInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;