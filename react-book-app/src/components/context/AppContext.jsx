import { createContext, useContext, useState } from "react";
import React from "react";

const StoreContext = createContext();


export const UseStorageContext = () => { 
    const context=useContext(StoreContext)
    if(context===undefined){
        throw new Error("StorageContext must be used within a StoreContextProvider")
    }
    return context;
 }

const StoreContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    const addToFavorites = (book) => {
        const oldFavorites=[...favorites];
        const newFavorites=oldFavorites.concat(book);
        setFavorites(newFavorites)
    }

    const removeFromFavorites=(id)=>{
        const oldFavorites=[...favorites];
        const newFavorites=oldFavorites.filter((book)=>book.id !== id);
        setFavorites(newFavorites)
    }

  return (
    <StoreContext.Provider value={{favorites,addToFavorites,removeFromFavorites}}>
        {children}
    </StoreContext.Provider>
  )
};

export default StoreContextProvider;
