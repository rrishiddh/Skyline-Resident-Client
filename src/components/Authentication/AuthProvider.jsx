import { createContext,useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import app from "../firebase/firebase.config";



// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true);


    const createNewUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    }
    const userLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () =>{
        return signInWithPopup(auth,googleProvider);
    }

    const logOut=() => {
        setLoading(true);
        return signOut(auth)
    }
    const updateUserProfile = (updatedData) => {
         return updateProfile(auth.currentUser, updatedData)
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
        signInWithGoogle
    }
    useEffect(()=>{

       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        });
        return () =>{
            unsubscribe();
        }
    },[])


    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;