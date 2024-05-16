import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState("{}");
    const [iteminfo, setIteminfo] = useState([])
    const url = "http://localhost:4000"
    const [token, setToken] = useState("")

    // const addToCart = async (itemId) => {
    //     if (!cartItems[itemId]) {
    //         setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
    //     }
    //     else {
    //         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    //     }
    //     if (token) {
    //         await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    //     }
    // }

    // const removeFromCart = async (itemId) => {
    //     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    //     if (token) {
    //         await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    //     }
    // }


    // const loadCartData = async (token) => {
    //     const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } })
    //     setCartItems(response.data.cartData);
    // }

    useEffect(() => {
        async function loadData() {
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])


    const contextValue = {
        cartItems,
        setCartItems,
        // addToCart,
        // removeFromCart,
        url,
        token,
        setToken,
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider