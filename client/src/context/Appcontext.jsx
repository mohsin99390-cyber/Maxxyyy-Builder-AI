import { createContext, useState, useContext } from "react";


const AppContext = createContext(undefined)

export function AppContextProvider({ children }) {

    //Auth states
    const [user, setUser] = useState(null)
    const [loadingUser, setLoadingUser] = useState(true);

    return (
        <AppContext.Provider value={{
            user, loadingUser
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