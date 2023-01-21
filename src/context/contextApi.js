import React,{ useState, useEffect,createContext} from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context= createContext();

export const AppContext=(props)=>{
    const [loading,setLoading] = useState(false);
    const [searchResults,setSearchResults] = useState(false);
    const [selectCategories,setSelectCategories] = useState("New");
    const [mobileMenu,setMobileMenu] = useState(false);

    useEffect(()=>{
        fetchSelectedCategoryData(selectCategories);
    },[selectCategories])

    const fetchSelectedCategoryData=(query)=>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then((res)=>{
            console.log(res.contents)
            setSearchResults(res.contents)
            setLoading(false)
        })
    }

    return (
        <Context.Provider value={{
            loading,
            setLoading,
            searchResults,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobileMenu
        }} >
            {props.children}
        </Context.Provider>
    )
}
