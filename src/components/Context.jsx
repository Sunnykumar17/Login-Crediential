import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    
    const [isLogIn, setIsLogIn] = useState(false);
    // const [userName, setUserName] = useState({
    //     name:"sunny",
    // });

    return (
        <AppContext.Provider value={{isLogIn, setIsLogIn}}>
            {children}
        </AppContext.Provider>
    )
}
export { AppContext, AppProvider };