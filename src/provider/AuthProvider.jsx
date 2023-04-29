import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
export const authContext =createContext(null)
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const auth = getAuth(app)
  const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginUser =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  useEffect(()=>{
 const unSubscribe =onAuthStateChanged(auth,currentUser=>{
      console.log(currentUser)
      setUser(currentUser)
    })
    return ()=>{
      unSubscribe()
    }
  },[])
    //log out function
    const logOut =()=>{
      signOut(auth)
    }

  const authInfo ={
     createUser,
     loginUser,
     user,
     logOut
  }

    return (
       <authContext.Provider value={authInfo}>
         {children}
       </authContext.Provider>
    );
};

export default AuthProvider;