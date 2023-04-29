import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
export const authContext =createContext(null)
const AuthProvider = ({children}) => {
  const auth = getAuth(app)
  const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginUser =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const authInfo ={
     createUser,
     loginUser
  }

    return (
       <authContext.Provider value={authInfo}>
         {children}
       </authContext.Provider>
    );
};

export default AuthProvider;