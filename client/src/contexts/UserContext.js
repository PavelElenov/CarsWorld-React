import { createContext } from "react";
import { useState } from "react";
import { getItemFromLocalStorage } from "../utils/localStorageManagment";
import { setItemInLocalStorage, deleteItemFromLocalStorage } from "../utils/localStorageManagment";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const token = getItemFromLocalStorage("auth");
        return token ? token : null;
    });

    const loginUser = (data) => {
        setUser(data);
        setItemInLocalStorage("auth", data);
    }

    const logoutUser = () => {
        setUser(null);
        deleteItemFromLocalStorage("auth");
    }

    const editUser = (data) => {
        setUser(data);
        deleteItemFromLocalStorage("auth");
        setItemInLocalStorage("auth", data);
    }

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser, editUser }}>
            {children}
        </UserContext.Provider>
    );
};