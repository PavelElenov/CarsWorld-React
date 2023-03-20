import { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import { get } from "../services/requests";
import { UserContext } from "./UserContext";

export const UserItemsContext = createContext();

export const UserItemsContextProvider = ({children}) => {
    const {user} = useContext(UserContext);
    const [items, setItems] = useState([]);
    const [itemsLength, setItemsLength] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(() => {
        get(`/cart/${user.id}`).then(data => setItems(data));
    }, []);

    useEffect(() => {
        items && setItemsLength(items.length);
        items && setTotalPrice(items.reduce((total, item) => total + item.price, 0));
    },[items]);

    const deleteItem = async (id) => {
        setItems(state => state.filter(item => item._id !== id && item));
    };

    const addItem = async (id, type) => {
        let item;

        if(type == "car"){
            item = await get(`/cars/car/${id}`);
        }else{
            item = await get(`/accessories/accessorie/${id}`);
        }

        setItems(state => [...state, item]);
    };

    const deleteAllItems = () => {
        setItems([]);
    }

    return(
        <UserItemsContext.Provider value={{items, itemsLength, deleteItem, addItem, deleteAllItems, totalPrice}}>
            {children}
        </UserItemsContext.Provider>
    );
};
