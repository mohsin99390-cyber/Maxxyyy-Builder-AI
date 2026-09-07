import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";


const AppContext = createContext(undefined)

export function AppContextProvider({ children }) {

    //Auth states
    const [user, setUser] = useState(null)
    const [LoadingUser, setLoadingUser] = useState(true);
    //Auth Action
    const checkSession = async ()=>{
        try {
            const {data} = await api.get("/api/auth/me");
            // setUser(data.user);
        } catch (error) {
            setUser(null)
        }finally{
            setLoadingUser(false)
        }
    }
      useEffect(()=>{
        checkSession()
      },[checkSession])

    return (
        <AppContext.Provider value={{
            user, LoadingUser
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    if (useContext(AppContext) === undefined) {
        throw new Error("useAppContext must be used within an AppContextprovider");
    }
    return useContext(AppContext);
}