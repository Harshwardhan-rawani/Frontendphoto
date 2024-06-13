import { createContext, useState,useContext } from "react";

export const  Authcontext = createContext()


export const AuthProvider = ({children})=>{
    const [token ,setToken]=useState(localStorage.getItem("token"))
    
    const login = (newtoken)=>{
        setToken(newtoken);
        localStorage.setItem("token",newtoken)
        
    }
    const logout = ()=>{
        setToken(localStorage.getItem("token"))
        localStorage.removeItem("token")
        window.location.reload()
    }
    return (
        <Authcontext.Provider value = {{token,login,logout}}>
            {children}
        </Authcontext.Provider>
    )
}
