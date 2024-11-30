import { createContext, useContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, imgURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imgURL
        })
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            const userEmail = currentUser?.email || user?.email
            if (currentUser) {
                setUser(currentUser)
                
                const uid = currentUser.uid;
                // ...
                setLoading(false)

                axios.post("https://car-doctor-server-brown-zeta.vercel.app/login",{email:userEmail},{withCredentials:true})
                .then(res =>{
                    console.log("login",res.data);
                    
                })
            } else {
                setUser(null)
                setLoading(false)
                axios.post("https://car-doctor-server-brown-zeta.vercel.app/logout",{email:userEmail},{withCredentials:true})
                .then(res =>{
                    console.log("logout",res.data);
                    
                })
            }


        });
        return () => {
            return unSubscribe()
        }
    }, [])
    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        logInUser,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;