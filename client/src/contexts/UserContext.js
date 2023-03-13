import { createContext } from "react";
import { useState } from "react";
import { getItemFromLocalStorage } from "../utils/localStorageManagment";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const token = getItemFromLocalStorage("auth");
        return token ? token : null;
    });

    const loginUser = (data) => {
        setUser(data);
    }

    const logoutUser = () => {
        setUser(null);
    }


    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};